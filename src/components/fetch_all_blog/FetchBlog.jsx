import React, { useEffect, useState, useRef, useCallback } from "react";
import useFetch from "../../hooks/useFetch.js";
import Card from "../card/Card.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";
import { savePost } from "../../redux/slice/PostSlice/PostSlice.js";
import {
  showSuccessToast,
  showInfoToast,
  showErrorToast,
  showWarnToast
} from "../../utils/ShowToast.js"

const FetchBlog = () => {
  const dispatch = useDispatch();
  const { blogstate } = useSelector(state => state.postslice);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async (pageNum) => {
    try {
      const response = await fetch(
        `/api/v1/blog/fetch/all?page=${pageNum || page}&pageSize=10`
      );
      const result = await response.json();
      if (result.data && Array.isArray(result.data.blogs)) {
        dispatch(savePost(result.data));
        setBlogs(prevBlogs => [...prevBlogs, ...result.data.blogs]);
      } else {
        showErrorToast("Some error occurred while fetching blogs!");
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [dispatch, page]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchData = useCallback(() => {
    setPage(prevPage => prevPage + 1);
    fetchBlogs(page + 1);
  }, [fetchBlogs, page]);

  const update = useCallback((id, followed, newFollowers) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog.owner === id ? { ...blog, isFollowed: followed, followers: newFollowers } : blog
      )
    );
  }, []);

  const updateLike = useCallback((blogId, isLiked, newLike) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog._id === blogId ? { ...blog, isLiked, likes: newLike } : blog
      )
    );
  }, []);

  const updateComment = useCallback((blogId, newComment) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog._id === blogId ? { ...blog, comments: newComment } : blog
      )
    );
  }, []);

  const updateSaveCount = useCallback((blogId, isSaved, newSave) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog._id === blogId ? { ...blog, isSaved, saves: newSave } : blog
      )
    );
  }, []);

  return (
    <InfiniteScroll
      dataLength={blogs.length}
      next={fetchData}
      hasMore={blogs?.length !== blogstate?.totalBlog}
      loader={<Spinner />}
    >
      {blogs.map((blog, index) => (
        <Card
          key={blog._id}
          blog={blog}
          index={index}
          fun={update}
          funUpdateLike={updateLike}
          funUpdateComment={updateComment}
          funUpdateSave={updateSaveCount}
        />
      ))}
    </InfiniteScroll>
  );
};

export default React.memo(FetchBlog);
