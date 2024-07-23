import React, { useEffect, useState, useCallback, useRef } from "react";
import { FetchData } from "../../utils/Fetch.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/spinner/Spinner.jsx";
import Card from "../../components/card/Card.jsx";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast.js";

function FetchCustomBlog({ USERID, URI, CONFIG, PAGE, PAGESIZE }) {
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [page, setPage] = useState(PAGE || 1);
  const [pageSize, setPageSize] = useState(PAGESIZE || 10);
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(null);

  const fetchBlogs = useCallback(
    (paraOne) => {
      const controller = new AbortController();
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = controller;
      setLoading(true);
      FetchData(`${URI}${URI.includes("?")?"&":"?"}page=${paraOne}&pageSize=${pageSize}`, { ...CONFIG, signal: controller.signal })
        .then((res) => {
          setBlogs((prev) => [...prev, ...res.data.blogs]);
          setTotalBlogs(res.data.totalBlogCount);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            showErrorToast(err);
          }
        })
        .finally(() => setLoading(false));
    },
    [URI, pageSize, CONFIG]
  );

  const fetchData = useCallback(() => {
    const nextPage = page + 1;
    fetchBlogs(nextPage);
    setPage(nextPage);
  }, [fetchBlogs, page]);

  const updateFollow = useCallback((id, followed, newFollowers) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.owner === id ? { ...blog, isFollowed: followed, followers: newFollowers } : blog
      )
    );
  }, []);

  const updateLike = useCallback((blogId, isLiked, newLike) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === blogId ? { ...blog, isLiked, likes: newLike } : blog
      )
    );
  }, []);

  const updateComment = useCallback((blogId, newComment) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === blogId ? { ...blog, comments: newComment } : blog
      )
    );
  }, []);

  const updateSaveCount = useCallback((blogId, isSaved, newSave) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === blogId ? { ...blog, isSaved, saves: newSave } : blog
      )
    );
  }, []);

  useEffect(() => {
    fetchBlogs(page);
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div>
      {loading && blogs.length === 0 ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={blogs.length !== totalBlogs}
          loader={loading && <Spinner />}
        >
          {blogs.map((blog, index) => (
            <Card
              key={blog._id}
              blog={blog}
              index={index}
              fun={updateFollow}
              funUpdateLike={updateLike}
              funUpdateComment={updateComment}
              funUpdateSave={updateSaveCount}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}

export default React.memo(FetchCustomBlog);
