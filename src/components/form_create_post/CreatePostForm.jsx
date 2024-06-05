import React,{useRef} from 'react'
import DesginedTextArea from "../designed_textarea/DesginedTextArea.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"
import SpecialInputField from "../../components/special_input_field/SpecialInputField.jsx"
import Camera from "../../assets/Camera.svg"
import GradientButton from "../buttons/GradientButton.jsx"

const CreatePostForm = () => {
   const titletRef = useRef()
   const tagsRef = useRef()
   const contentRef = useRef()
   
  return (
    <form className="w-full mt-14 scrollBar">
      <DesginedTextArea 
       ref = {titletRef}
       label = "What's You Feel "
       hint = "feels exicted ! going New York"
       style = {{
          minHeight :"40px",
          maxHeight : "160px"
       }}
       />
       <VerticalSpacer h="30px" />
      <DesginedTextArea 
        ref = {tagsRef}
        label = "Tags"
        hint = "hot, sizzling, sexy, trend"
        style = {{
          minHeight :"40px",
          maxHeight : "100px"
        }}
       />
       <VerticalSpacer h="45px"/>
       <SpecialInputField svg={Camera} ref={contentRef}/>
      <VerticalSpacer h="25px"/>
       <GradientButton />
    </form>
  )
}

export default CreatePostForm