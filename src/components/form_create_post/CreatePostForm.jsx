import React, { useRef, useEffect, useState } from "react";
import DesginedTextArea from "../designed_textarea/DesginedTextArea.jsx";
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx";
import SpecialInputField from "../../components/special_input_field/SpecialInputField.jsx";
import Camera from "../../assets/Camera.svg";
import GradientButton from "../buttons/GradientButton.jsx";
import useLocalStorage,{clearSavedValue} from "../../hooks/useLocalStorage.js";
import { FetchData } from "../../utils/Fetch.js";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast.js";
import Spinner from "../spinner/Spinner.jsx"
import useCustomNavigate  from "../../hooks/useCustomNavigate.js"

const CreatePostForm = () => {
  const titleRef = useRef();
  const tagsRef = useRef();
  const contentRef = useRef();

  let [title, settitle] = useLocalStorage("title", "");
  let [tags, setTags] = useLocalStorage("tags", [""]);
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const naigate = useCustomNavigate()

  useEffect(() => {
    if (tags?.includes(",")) {
      setTags(tags.split(","));
    }
  }, [tags?.length]);

  const handlePost=(e)=>{
      e.preventDefault()
      setLoading(true)
      if(!(tags instanceof Array)){
         showErrorToast("at least two tags required!")
         setLoading(false)
         tagsRef.current.focus()
         return
      }
      const formData = new FormData()
      formData.append("content",title)
      tags.forEach(tag => formData.append("tags[]", tag));
      formData.append("con_image",contentRef.current.files[0])
      const config ={
         method: "POST",
         header:{
            "Content-Type":"multipart/form-data"
         },
         body: formData
      }
      FetchData("/api/v1/blog/create",config)
      .then(res=>{
         clearSavedValue("title")
         clearSavedValue("tags")
         showSuccessToast("blog posted !")
         setLoading(false)
         naigate("/")
      })
      .catch(err=>{
         showErrorToast(err)
         setLoading(false)
      })
   }


  return (
    <form className="w-full mt-14 scrollBar">
      <DesginedTextArea
        ref={titleRef}
        val={title}
        setvalue={settitle}
        label="What's You Feel "
        hint="feels exicted ! going New York"
        style={{
          minHeight: "40px",
          maxHeight: "160px"
        }}
      />
      <VerticalSpacer h="30px" />
      <DesginedTextArea
        ref={tagsRef}
        val={tags}
        setvalue={setTags}
        label="Tags"
        hint="add , to seprate tags eg: cool,dude"
        style={{
          minHeight: "40px",
          maxHeight: "100px"
        }}
      />
      <VerticalSpacer h="45px" />
      <SpecialInputField svg={Camera} ref={contentRef} />
      <VerticalSpacer h="25px" />
      <GradientButton fun={handlePost} 
         dis={loading ? true : false}
         btnText={
            loading?
            <Spinner
              style={{
                 borderColor:"#355af7"
              }}
             />
            :"Post"}
         />
    </form>
  );
};

export default CreatePostForm;
