import React, { useEffect, useState, useCallback, useContext } from "react";
import { FetchData } from "../../../utils/Fetch.js";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../spinner/Spinner.jsx";
import { BlogContext } from "../../../context/BlogContext.jsx";

const Post = () => {
  const { userId } = useParams();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const { totalBlog, setTotalBlog } = useContext(BlogContext);

  const fetchContent = useCallback(
    (pageNum, controller) => {
      FetchData(
        `/api/v1/blog/fetch/content?userId=${userId}&page=${pageNum}&pageSize=6`,
        { signal: controller.signal }
      )
        .then(res => {
          setPosts(prev => [...prev, ...res.data.blogs]);
          setTotalBlog(res.data.totalBlogCount);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });
    },
    [userId, setTotalBlog]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchContent(page, controller);

    return () => {
      controller.abort();
    };
  }, [page, fetchContent]);

  const fetchNext = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchNext}
      hasMore={posts.length < totalBlog || totalBlog === null}
      loader={<Spinner />}
      className="w-full flex flex-col items-center mt-3 mb-2"
    >
      {posts.map((post, index) => (
        <div
          key={index}
          className={`w-[95%] bg-gray-600/40 rounded my-2 ${
            !posts.length && "animate-pulse"
          }`}
        >
          <img
            src={`${post.contentimg.replace("/upload/", "/upload/c_fill,q_80/")}`}
            srcSet={`${post.contentimg.replace(
              "/upload/",
              "/upload/c_fill,q_80,w_200/"
            )} 200w, ${post.contentimg.replace(
              "/upload/",
              "/upload/c_fill,q_80,w_400/"
            )} 400w, ${post.contentimg.replace(
              "/upload/",
              "/upload/c_fill,q_80,w_800/"
            )} 800w`}
            loading="lazy"
            className="w-full object-cover"
            sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 800px"
            alt="post"
          />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default React.memo(Post);
