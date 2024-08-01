import React, { useState, useEffect, useRef } from "react";
import HumanIcon from "../../assets/human_icon.svg";
import ButtonBlack from "../../components/buttons/ButtonBlack.jsx";
import Sample from "../../assets/Sample.jpg";
import ButtonWhite from "../../components/buttons/ButtonWhite.jsx";
import LottieIcon from "../lottie/LottieIcon.jsx";
import {
  showSuccessToast,
  showInfoToast,
  showErrorToast,
  showWarnToast
} from "../../utils/ShowToast.js";
import { FetchData } from "../../utils/Fetch.js";
import { formatDate } from "../../utils/FormatData.js";
import CommentChip from "../commet_chip/CommentChip.jsx";
import ShowFullImage from "../../common/show_full_image/ShowFullImage.jsx"



export default function Card({
  blog,
  index,
  fun = () => {},
  funUpdateLike = () => {},
  funUpdateComment = () => {},
  funUpdateSave
}) {
  const config = {
    method: "POST"
  };
  const [overContent, setoverContent] = useState(true);
  
  const [showChip, setShowChip] = useState(false);

  const [moreClick, setmoreClick] = useState(false);
  const [sampleComments, setSampleComments] = useState([]);
  const [openPopUp,setOpenPopUp] = useState(false)
  const [disable,setDisable] = useState(false)

  useEffect(() => {
    if (blog?.content?.length > 120) {
      setoverContent(true);
    } else {
      setoverContent(false);
    }
  }, [blog?.content]);

  

  const handleMoreClick = () => {
    setmoreClick(!moreClick);
  };

  const handleLike = blogId => {
    FetchData(`/api/v1/like/to/${blogId}`, config)
      .then(res => funUpdateLike(blogId, true, blog.likes + 1))
      .catch(err => showErrorToast(err));
  };

  const handleRemoveLike = blogId => {
    FetchData(`/api/v1/like/remove/to/${blogId}`, config)
      .then(res => funUpdateLike(blogId, false, blog.likes - 1))
      .catch(err => showErrorToast(err));
  };

  const handleFollow = async id => {
    setDisable(true)
    FetchData(`/api/v1/follow/user/to/${id}`, config)
      .then(data => {
        if (data.code === 200) {
          fun(id, true, blog.followers + 1);
        } else {
          showErrorToast(data.message);
        }
      })
      .catch(error => showErrorToast(error))
      .finally(()=>{
         setTimeout(()=>setDisable(false),1000)
      })
  };

  const handleUnfollow = async id => {
    setDisable(true)
    FetchData(`/api/v1/follow/user/unfollow/${id}`, config)
      .then(data => {
        if (data.code === 200) {
          fun(id, false, blog.followers - 1);
        } else {
          showErrorToast(data.message);
        }
      })
      .catch(error => showErrorToast(error))
      .finally(()=>{
         setTimeout(()=>setDisable(false),1000)
      })
  };

  const handleComment = (blogId, manually = false) => {
    if (!manually && showChip) {
      setShowChip(false);
      return;
    }
    FetchData(`/api/v1/comment/get/${blogId}?page=1&pageSize=10`)
      .then(res => {
        setSampleComments(res.data.comments);
        if (!manually) setShowChip(!showChip);
      })
      .catch(err => showErrorToast(err));
  };

  const handleTriggerUpdateComment = (blogId, newComment) => {
    handleComment(blogId, true);
    funUpdateComment(blogId, blog.comments + 1);
  };

  const handleSave = blogId => {
    console.log(blog)
    if (blog.isSaved) {
      FetchData(`/api/v1/save/blog/remove/${blogId}`, { method: "PUT" })
        .then(res => {
          funUpdateSave(blogId, false, blog.saves - 1);
          showSuccessToast("blog removed !");
        })
        .catch(err => showErrorToast(err));
    } else {
      FetchData(`/api/v1/save/blog/${blogId}`, config)
        .then(res => {
          funUpdateSave(blogId, true, blog.saves + 1);
          showSuccessToast("blog saved !");
        })
        .catch(err => showErrorToast(err));
    }
  };
  
  
  const showImage=()=>{
     setOpenPopUp(true)
  }
  
  const closeImage=()=>{
     setOpenPopUp(false)
  }
  
  
  useEffect(() => {
    if (openPopUp) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [openPopUp]);

  return (
    <div className="border-[0.8px] border-gray-500/20 rounded w-[95%] sm:w-[95%] md:w-[80%] lg:w-[55%] mt-4 mb-9 shadow-md shadow-slate-900 max-h-fit pb-2 overflow-x-hidden select-none ">
    {openPopUp&&
      <ShowFullImage 
        SRC={blog?.contentimg} 
        CLOSE={closeImage}
      />
    }
      <div className="flex items-center justify-between select-none p-2">
        <div className="w-fit h-fit flex">
          <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-pink-300 to-red-300 overflow-hidden bg-cover object-cover ">
            <img
              src={blog.avatar}
              className="w-[100%] h-[100%] brightness-125 object-cover"
            />
          </span>
          <div className="flex flex-col items-center justify-center w-fit h-fit text-gray-200  pl-2 leading-[1.2]">
            <h2 className="text-start text-[15px] font-bold w-full font-nunito font-medium">
              {blog.username}
            </h2>
            <p className="text-[13px] font-normal">
              Followers • {blog.followers}
            </p>
          </div>
        </div>
        <ButtonBlack
          text={blog?.isFollowed?"unfollow":"follow"}
          width="90px"
          radius="25px"
          size="14px"
          fun={
            blog?.isFollowed
              ? () => handleUnfollow(blog.owner)
              : () => handleFollow(blog.owner)
          }
          disable={disable}
          style={{
             border:`${disable?"1px solid #dad1d5":""}`
          }}
        />
      </div>

      <p
        className={`overflow-clip min-h-[30px] max-h-fit leading-[1.2] font-[400] text-[16px] text-gray-300 w-full text-start mt-2 ${
          moreClick && "h-fit"
        } select-none p-2 font-nunito font-nunito-semibold `}
      >
        {overContent ? (
          <>
            {moreClick ? (
              <span
                className="text-gray-300 font- select-none leading-[1.2] font-nunito-semibold text-[16px]"
                onClick={handleMoreClick}
              >
                {" "}
                {blog.content} <strong>Less</strong>
              </span>
            ) : (
              <>
                {blog.content?.slice(0, 110)}
                <span
                  className="text-gray-200 font-semibold select-none   "
                  onClick={handleMoreClick}
                >
                  {" "}
                  ..More
                </span>
              </>
            )}
          </>
        ) : (
          <>{blog.content}</>
        )}
      </p>

      <div className="w-full  rounded-b overflow-hidden relative max-h-[350px] min-h-[200px] bg-gray-700/10" onClick={showImage}>
        <img
          src={`${blog.contentimg?.replace("/upload/", "/upload/c_fill,q_auto/")}`}
          srcSet={`${blog.contentimg?.replace(
            "/upload/",
            "/upload/c_fill,q_auto,w_200/"
          )} 200w, ${blog.contentimg?.replace(
            "/upload/",
            "/upload/c_fill,q_auto,w_400/"
          )} 400w, ${blog.contentimg?.replace(
            "/upload/",
            "/upload/c_fill,q_auto,w_800/"
          )} 800w`}
          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 800px"
          className="w-full object-center lazyload"
          alt="Content"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 w-fit h-fit text-end text-gray-200 font-bold text-[10px] bg-slate-500/40 px-2 py-[1.5px] rounded-full">
          {formatDate(blog.createdAt?.toString())}
        </div>
      </div>

      <div className="w-full px-3 flex justify-start mt-3">
        <div className="w-fit rounded-full bg-gradient-to-r from-[#e84d4d] to-[#e957ad]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 ">
          {blog?.likes} Likes
        </div>
        <div className="w-fit rounded-full bg-gradient-to-r from-[#575cd9] to-[#ea5c90]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 ml-2">
          {blog?.comments} Comments
        </div>
        <div className="w-fit rounded-full bg-gradient-to-r from-[#4890f1] to-[#a37af4]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 ml-2">
          {blog?.saves} saves
        </div>
      </div>

      <div className="flex justify-between items-center text-slate-100 mt-6 ">
        <button
          className="w-[calc(100%/3.5)] bg-blue-500 p-1 font-bold text-[12px] divider rounded-full m-1 flex items-center justify-center relative h-[32px]"
          onClick={
            blog?.isLiked
              ? () => handleRemoveLike(blog._id)
              : () => handleLike(blog._id)
          }
        >
          <LottieIcon
            id="hbzwsetw"
            color={blog?.isLiked ? "#ec4a7f" : "#d7d7d7"}
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "25px"
            }}
          />
        </button>
        <button
          className="w-[calc(100%/3.5)] bg-yellow-500 p-1 font-bold text-[12px] divider rounded-full m-1 flex items-center justify-center h-[32px]"
          onClick={() => handleComment(blog?._id)}
        >
          <LottieIcon
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "25px"
            }}
          />
        </button>
        <button
          className="w-[calc(100%/3.5)] bg-green-500 p-1 font-bold text-[12px]  rounded-full m-1 flex items-center justify-center relative h-[32px]"
          onClick={() => handleSave(blog?._id)}
        >
          <LottieIcon
            id="rwtswsap"
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "25px"
            }}
            color={blog?.isSaved ? "#ec4a7f" : "#d7d7d7"}
          />
        </button>
      </div>
      {showChip && (
        <CommentChip
          sample={sampleComments}
          blogId={blog?._id}
          handleTriggerUpdateComment={handleTriggerUpdateComment}
        />
      )}
    </div>
  );
}
