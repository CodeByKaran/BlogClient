import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch.js";
import Card from "../card/Card.jsx";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "../spinner/Spinner.jsx"
import {useDispatch,useSelector} from "react-redux"
import {savePost} from "../../redux/slice/PostSlice/PostSlice.js"

const FetchBlog = () => {
  const dispatch = useDispatch()
  const {blogstate} = useSelector(state=>state.postslice)
  const [blogs, setBlogs] = useState([]);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  const fetchBlogs = async pageNum => {
    try {
      const response = await fetch(
        `/api/v1/blog/fetch/all?page=${pageNum}&pageSize=2`
      );
      const result = await response.json();
      dispatch(savePost(result.data))
      setBlogs(prevBlogs => [...prevBlogs, ...result.data.blogs]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, []);
  
  const fetchData=async()=>{
     const curPage = page
     const nextPage = curPage +1
     setPage(nextPage)
     fetchBlogs(nextPage)
  }

  return (
    <>
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={blogs.length!=blogstate?.totalBlog}
        loader={<Spinner />}
      >
        {blogs?.map((e, i) => (
          <Card
            key={e._id}
            avatar={e.avatar}
            username={e.username}
            followers={e.followers}
            isfollowed={e.isFollowed}
            contentdec={e.content}
            content={e.contentimg}
            likes={e.totallikes}
            comment={e.totalComments}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default FetchBlog;
