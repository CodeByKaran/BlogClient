import React,{useRef,useEffect,useState} from 'react'
import UserPhoto from "../user_photo/UserPhoto.jsx"
import DesginedTextArea from "../designed_textarea/DesginedTextArea.jsx"
import GradientButton from "../buttons/GradientButton.jsx"
import useLocalStorage,{clearSavedValue} from "../../hooks/useLocalStorage.js"
import Resize from "../../assets/Resize.svg"
import {FetchData} from "../../utils/Fetch.js"
import {
   showSuccessToast,
   showErrorToast
} from "../../utils/ShowToast.js"
import Human from "../../assets/human_icon.svg"
import {formatDate} from "../../utils/FormatData.js"
import LottieIcon from "../lottie/LottieIcon.jsx"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"

const CommentChip = ({
   sample,
   blogId,
   handleTriggerUpdateComment
}) => {
   const navigate = useCustomNavigate()
   const commentTextRef = useRef()
   const [comment, setComment] = useLocalStorage("commentText","")
   const [triggerAnimation,setTriggerAnimation] = useState(true)
   
   const [iterComment,setIterComment] = useState({})
   
   useEffect(()=>{
      setIterComment(sample[0])
   },[sample])
   
   useEffect(()=>{
      setTimeout(()=>setTriggerAnimation(false),500)
   },[triggerAnimation])
   
  useEffect(() => {
    if(sample){
    let iter = 1;
    let commentTimeOut = setInterval(() => {
        iter = (iter + 1) % sample.length;
        setIterComment(sample[iter])
        setTriggerAnimation(true)
    }, 3000);
    return () => clearInterval(commentTimeOut);
    }
}, [sample]);

  const handleComment=()=>{
     const config = {
        method:'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body:JSON.stringify({
           content : comment.trim()
        })
     }
     FetchData(`/api/v1/comment/to/${blogId}`,config)
     .then(res=>{
        handleTriggerUpdateComment(blogId)
        showSuccessToast("comment posted!")
        setComment("")
     })
     .catch(err=>showErrorToast(err))
  }
 
  const handleNaigate=()=>{
     navigate(`blog/${blogId}`)
  }

  return (
    <div className="h-fit w-full flex flex-col items-center mt-5 relative">
      {iterComment?(
     <div className={`w-[95%] rounded  border-[.6px] border-gray-100/30 bg-inherit flex flex-col pt-2 px-2 pb-1 relative  shadow-md shadow-gray-100/10  overflow-hidden ${triggerAnimation&&"slide_animation"} `}>
     <div className="w-5 h-5 rounded bg-inherit absolute top-2 right-2 active:bg-gray-400/50 p-1" onClick={handleNaigate}>
       <img src={Resize} alt="full Screen"/>
     </div>
     <div>
      <UserPhoto
        src={iterComment.avatar?iterComment.avatar:Human}
        username={`• ${iterComment.username}`}
        showname = {true}
        w="24px"
        h="24px"
        font="13px"
        weight="450"
        showNameRight={true}
        showBorder = {false}
        textColor = "#cccccc"
       />
     </div>
     <div className="w-full text-start text-[#c4c4c4] font-normal max-h-fit mt-2 min-w-fit text-[13px] min-h-fit">
      {iterComment.content?.length>220?iterComment.content.slice(0,220):iterComment.content}
     </div>
     <div className="w-full h-fit flex justify-between items-center mt-2">
      <div className="ml-[6px]">
       <LottieIcon 
        id="hbzwsetw"
        style={{
           height:"20px",
           width:"20px",
        }}
        color="#486df4"
        />
      </div>
      <div className="text-[10px] text-[#cccccc] font-black mr-2 pb-1">
       {formatDate(iterComment.updatedAt)}
      </div>
     </div>
     </div>):<h2 className="w-[95%] text-center font-bold text-gray-200 text-[16px] pb-1 animate-bounce pt-3">There Is Nothing To Show !</h2>
   }
     <div className="w-[95%] relative">
      <DesginedTextArea 
       ref={commentTextRef}
       showLabel = {false}
       hint="Write your Thought about This post !"
       rows="5"
       style={{
          minHeight:"100px",
          minWidth: "100%",
          fontSize:"13px"
       }}
       val={comment}
       setvalue={setComment}
       />
      <div className="absolute right-3 bottom-2">
       <GradientButton 
         btnText="Post"
         style={{
            minWidth:"60px",
            fontWeight:"500",
            fontSize:"14px",
            height:"30px"
         }}
         fun={handleComment}
        />
      </div>
     </div>
    </div>
  )
}

export default CommentChip