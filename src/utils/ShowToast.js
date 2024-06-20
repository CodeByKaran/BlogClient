import { Bounce,Slide,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  newestOnTop : true,
  closeOnClick: true,
  rtl: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Slide,
  hideProgressBar: true,
  swipeToClose: true,
  closeOnSwipe: true,
  draggablePercent: 30
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