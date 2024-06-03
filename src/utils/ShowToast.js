import { Bounce,Slide,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Slide
};

let activeId = null

export const showSuccessToast = (message="Hello World") => {
   if(activeId!==null)
   toast.dismiss(activeId); 
   activeId = toast.success(message,config);
};

export const showInfoToast = (message="Hello World") => {
   if(activeId!==null)
   toast.dismiss(activeId); 
   activeId = toast.info(message,config);
};

export const showWarnToast = (message="Hello World") => {
   if(activeId!==null)
   toast.dismiss(activeId); 
   activeId = toast.warn(message,config);
};

export const showErrorToast = (message="Hello World") => {
   if(activeId!==null)
   toast.dismiss(activeId); 
   activeId = toast.error(message,config);
};