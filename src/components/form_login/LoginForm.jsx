import React,{useRef,useState,useEffect} from 'react'
import AppTitle from "../app_title/AppTitle.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"
import EmailInput from "../email_input/EmailInput.jsx"
import GradientButton from "../buttons/GradientButton.jsx"
import EmailIcon from "../../assets/Email.svg"
import EyeOpenIcon from "../../assets/EyeOpen.svg"
import EyeLockIcon from "../../assets/EyeLock.svg"
import {FetchData} from "../../utils/Fetch.js"
import {showSuccessToast,showErrorToast} from "../../utils/ShowToast.js"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"
import {setUser} from "../../redux/slice/LoggedSlice/LoggedUserSlice.js"
import {useDispatch} from "react-redux"


const LoginForm = () => {
   const dispatch = useDispatch()
   const emailRef = useRef()
   const passRef = useRef()
   const [togglePassIcon, setTogglePassIcon] = useState(false)
   const [cursorPos, setCursorPos] = useState(0);
   const navigate = useCustomNavigate()
   
  const togglePass = (e) => {
    e.preventDefault();
    const cursorPos = passRef.current.selectionStart;
    setTogglePassIcon(prev => !prev);
    setTimeout(() => {
      passRef.current.setSelectionRange(cursorPos, cursorPos);
    },0);
    passRef.current.focus();
  };

  const handleLoginFormSubmit=(e)=>{
     e.preventDefault()
     const loginCredentials = {
        email: emailRef?.current.value,
        password: passRef?.current.value
     }
     const config = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginCredentials)
     }
     FetchData("/api/v1/user/login",config)
     .then(data=>{
        if(data.code===200){
           dispatch(setUser(data.data))
           showSuccessToast(data.message)
           navigate("/",true)
        }else{
           showErrorToast(data.message)
        }
     })
     .catch(error=>showErrorToast(`${error}`))
  }
   
  return (
    <div className="w-full flex flex-col items-center p-2 justify-center h-[98vh] sm:w-full md:w-[80%] lg:w-[60%]">
     <div className="pt-4 pb-5 px-3 border border-gray-400/20 w-[95%] rounded ">
     <form className="w-full h-full flex flex-col items-center" onSubmit={handleLoginFormSubmit}>
   <div className="w-[95%] flex items-start justify-center mt-2 flex-col leading-[1.2] py-2">
      <h1 className="text-[28px] text-transparent bg-gradient-to-b from-[#f81544] to-[#f04f8e] bg-clip-text font-bold first-letter:text-[1.5em] ">Hey, User</h1>
      <h2 className="text-[18px] text-[#ef5d8f] font-medium">login To continue. . .</h2>
     </div>
      <VerticalSpacer h="50px" />
       <EmailInput 
         id="login_email"
         hint="kk123**8@example.com"
         label="Email "
         ref={emailRef}
         type="email"
         icon = {EmailIcon}
        />
      <VerticalSpacer h="30px" />
       <EmailInput 
         id="login_pass"
         hint="***********"
         label="Password"
         ref={passRef}
         type={togglePassIcon?"text":"password"}
         icon = {togglePassIcon?EyeOpenIcon:EyeLockIcon}
         iconclick={togglePass}
        />
      <VerticalSpacer h="30px" />
       <div className="w-full flex justify-end">
       <div>
         <a className="w-fit h-fit text-[15px]  text-[#f1cede] underline-offset-2 underline select-none active:no-underline">
           forget password?
         </a>
      </div>
       </div>
    <VerticalSpacer h="36px" />
     <GradientButton btnText="Login"/>
    <VerticalSpacer h="75px" />
    <p className="text-[14px] font-normal text-[#f1cede] select-none">Not Account? <strong className="underline underline-offset-2 active:no-underline">Sign Up</strong></p>
    <p className="text-[14px] font-normal text-[#f1cede] select-none ">All information is end to end encrypted</p>
     </form>
     </div>
    </div>
  )
}

export default LoginForm