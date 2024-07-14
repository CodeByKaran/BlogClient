import React, { useRef, useState } from "react";
import InputBox from "../../components/Input_box/InputBox.jsx";
import GradientButton from "../../components/buttons/GradientButton.jsx";
import SignupHero from "../../components/hero_signup/SignupHero.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"
import VerifySvg from "../../assets/Verify.png"
import {FetchData} from "../../utils/Fetch.js"
import {
   showSuccessToast,
   showErrorToast
} from "../../utils/ShowToast.js"
import {useParams} from "react-router-dom"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"


const Verify = () => {
  const navigate = useCustomNavigate()
  const boxOneRef = useRef(null);
  const boxTwoRef = useRef(null);
  const boxThreeRef = useRef(null);
  const boxFourRef = useRef(null);
  const boxFiveRef = useRef(null);
  const boxSixRef = useRef(null);

  const [otp, setOtp] = useState({
    boxOne: '',
    boxTwo: '',
    boxThree: '',
    boxFour: '',
    boxFive: '',
    boxSix: ''
  });
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  const handleInputChange = (current, next, value) => {
    setOtp((prevOtp) => {
      const newOtp = { ...prevOtp };
      if (current === boxOneRef) newOtp.boxOne = value;
      if (current === boxTwoRef) newOtp.boxTwo = value;
      if (current === boxThreeRef) newOtp.boxThree = value;
      if (current === boxFourRef) newOtp.boxFour = value;
      if (current === boxFiveRef) newOtp.boxFive = value;
      if (current === boxSixRef) newOtp.boxSix = value;
      return newOtp;
    });
    
    if (value.length === 1) {
      if (next && next.current) next.current.focus();
      else current.current.blur();
    }
  };

  const handleVerifyUser = () => {
     setLoading(true)
    const userOtp = Object.values(otp).join('')
    const body = {
       userOTP:Number(userOtp)
    }
    const config = {
       method:"POST",
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify(body)
    }
    FetchData(`/api/v1/user/verify/${id}`,config)
    .then(res=>{
       setLoading(false)
       navigate("/login")
       showSuccessToast("verified user")
    })
    .catch(err=>{
       setLoading(false)
       showErrorToast(err)
    })
  };
  
  const handleRefreshOtp=()=>{
     FetchData(`/api/v1/user/refresh-otp/${id}`,{method:"POST"})
     .then(res=>showSuccessToast("otp refreshed"))
     .catch(err=>{
        showErrorToast(err)
     })
  }

  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] select-none h-[100vh]">
     <SignupHero string="Verify ..." />
      <div className="flex flex-col items-start w-full sm:w-full md:w-[70%] lg:w-[60%] mt-7 p-2 px-3 md:items-center">
     <h1 className="font-mono font-bold text-gray-200 text-[15px] w-full text-start px-1 ">OTP</h1>
      <div className="flex w-full mt-3 justify-start">
        <InputBox 
          type="number"
          ref={boxOneRef}
          nextRef={boxTwoRef}
          handleInputChange={handleInputChange}
          value={otp.boxOne}
        />
        <InputBox
          type="number"
          ref={boxTwoRef}
          nextRef={boxThreeRef}
          handleInputChange={handleInputChange}
          value={otp.boxTwo}
        />
        <InputBox
          type="number"
          ref={boxThreeRef}
          nextRef={boxFourRef}
          handleInputChange={handleInputChange}
          value={otp.boxThree}
        />
        <InputBox
          type="number"
          ref={boxFourRef}
          nextRef={boxFiveRef}
          handleInputChange={handleInputChange}
          value={otp.boxFour}
        />        
        <InputBox
          type="number"
          ref={boxFiveRef}
          nextRef={boxSixRef}
          handleInputChange={handleInputChange}
          value={otp.boxFive}
        />
        <InputBox
          type="number"
          ref={boxSixRef}
          handleInputChange={handleInputChange}
          value={otp.boxSix}
        />        
        </div>
        <div className="w-full flex justify-start mt-4 mx-1">
         <p className="text-[#e4d5d7] text-[15px] font-medium" onClick={handleRefreshOtp}>Resend Code?</p>
        </div>
        <VerticalSpacer h="40px" />
        <div className="w-full flex  justify-start px-1">
         <GradientButton 
           btnText="Verify"
           fun={handleVerifyUser}
           loading={loading}
          />
        </div>
       <div className="h-[450px] w-full mt-14">
        <img src={VerifySvg} className="aspect-auto object-cover"/>
       </div>
      </div>
    </div>
  );
};

export default Verify;
