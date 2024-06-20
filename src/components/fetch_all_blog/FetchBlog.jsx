import React, { useEffect, useState, useRef } from "react";
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
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  const fetchBlogs = async (pageNum)=> {
    try {
      const response = await fetch(
        `/api/v1/blog/fetch/all?page=${pageNum?pageNum:page}&pageSize=5`
      );
      const result = await response.json();
      if (result.data && Array.isArray(result.data.blogs)) {
        dispatch(savePost(result.data));
        setBlogs(prev=>[...prev,...result.data.blogs]);
      }else{
        showErrorToast("some error occured while fetching blogs!")
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchBlogs(page);
  }, []);

  const fetchData = async () => {
    const curPage = page;
    const nextPage = curPage + 1;
    setPage(nextPage);
    fetchBlogs(nextPage);
  };
  
  const update = (id, followed, newFollowers) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.owner === id ? { ...blog, isFollowed: followed, followers: newFollowers } : blog
      )
    );
  };
  
  const updateLike = (blogId,isLiked,newLike)=>{
     setBlogs((prevBlogs)=>
        prevBlogs.map((blog)=>blog._id===blogId?{...blog,isLiked:isLiked,likes: newLike}:blog)
     )
  }
  
  const updateComment = (blogId,newComment)=>{
     setBlogs((prevBlogs)=>
        prevBlogs.map((blog)=>blog._id===blogId?{...blog,comments: newComment}:blog)
     )
  }
  
  const updateSaveCount=(blogId,isSaved,newSave)=>{
     setBlogs((prevBlogs)=>
        prevBlogs.map((blog)=>blog._id===blogId?{...blog,isSaved:isSaved,saves:newSave}:blog)
     )
  }

  return (
    <>
      <InfiniteScroll
        dataLength={blogs?.length}
        next={fetchData}
        hasMore={blogs?.length != blogstate?.totalBlog}
        loader={<Spinner />}
      >
        {blogs?.map((e, i) => (
          <Card key={e._id} blog={e}  index={i} fun={update} funUpdateLike={updateLike}
             funUpdateComment={updateComment}
             funUpdateSave={updateSaveCount}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default FetchBlog;
