import React, { useRef, useEffect, useState } from "react";
import SinglePostCommentSection from "../single_post_comment_section/SinglePostCommentSection.jsx";
import { useParams } from "react-router-dom";
import { FetchData } from "../../utils/Fetch.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner.jsx"
import {showErrorToast} from "../../utils/ShowToast.js"


const SinglePostComment = () => {
  const head = useRef();
  const [stickyBar, setStickyBar] = useState(false);
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { blogId } = useParams();

  window.onscroll = () => {
    const totalOffSet = window.pageYOffset;
    const barOffSet = head.current?.offsetTop;
    if (totalOffSet > barOffSet) {
      setStickyBar(true);
    } else {
      setStickyBar(false);
    }
  };
  const controller = new AbortController();
  
  const fetchComments=(pageNum)=>{
    const signal = controller.signal;
    FetchData(`/api/v1/comment/get/${blogId}?page=${pageNum||page}&pagesize=3`, {
      signal
    })
      .then(res => {
        if (res.data.comments.length === 0) setHasMore(false);
        setComments(prevComments => [...prevComments, ...res.data.comments]);
      })
      .catch(err => showErrorToast(err));
  }

  useEffect(() => {
    fetchComments()
    return () => {
      controller.abort();
    };
  }, []);

  const fetchMoreComments = () => {
    setPage(prevPage => prevPage + 1);
    fetchComments(page+1)
  };
  
  const handleBackToTop=()=>{
     window.scrollTo({ top: 0, behavior:"smooth"})
  }

  return (
    <div className="w-full flex flex-col items-center mt-3 select-none" ref={head}>
      <h1
        className={`text-lg font-bold text-gray-200 text-start pl-3 pt-4 pb-3 p-3 w-full mb-2 ${stickyBar &&
          "sticky top-0 left-0 w-[100%] bg-[#71707040] backdrop-blur text-2xl font-black "
        } z-50`}
      >
        Comments
      </h1>
      <div className="w-[95%] ">
        <InfiniteScroll
          dataLength={comments.length}
          next={fetchMoreComments}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={<p className=" text-[14px] text-gray-300 pb-2 pt-2 font-medium mb-5 mt-2 rounded-full px-4 bg-[#f64e73] w-fit active:bg-[#f64e7398] shadow-xl shadow-gray-950 select-none" onClick={handleBackToTop}>Go Top</p>}
        >
          {comments.map(e => (
            <SinglePostCommentSection key={e._id} comment={e} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default SinglePostComment;
