import React,{useRef,useEffect,useState} from "react";
import SinglePostCommentSection from "../single_post_comment_section/SinglePostCommentSection.jsx";

const SinglePostComment = () => {
   
   const head = useRef()
   const [stickyBar,setStickyBar] = useState(false)
   
   window.onscroll=()=>{
      const totalOffSet = window.pageYOffset;
      const barOffSet = head.current.offsetTop;
      if(totalOffSet>barOffSet){
         setStickyBar(true)
      }else{
         setStickyBar(false)
      }
   }
   
   
  return (
    <div className="w-[95%] flex flex-col items-center mt-3" ref={head}>
      <h1 className={`text-lg font-bold text-gray-200 text-start w-full pl-1 pr-1 ${stickyBar&&"sticky top-0 w-[100%] blur_effect_two p-3 text-2xl font-black pl-3 pt-4 pb-3"} transition-all duration-100 ease-out z-50`}>
        Comments
      </h1>
      <div className="w-full ">
        <SinglePostCommentSection />
        <SinglePostCommentSection />
        <SinglePostCommentSection />
        <SinglePostCommentSection />
        <SinglePostCommentSection />
        <SinglePostCommentSection />
        <SinglePostCommentSection />
        <SinglePostCommentSection />
      </div>
    </div>
  );
};

export default SinglePostComment;
