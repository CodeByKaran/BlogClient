let isFullHeight = false;

const getOffsetValue = element => {
  return (
     parseFloat(window.getComputedStyle(element).paddingTop) + parseFloat(window.getComputedStyle(element).paddingBottom)
   )
};

function autoHeight(element, mh) {
  element.style.height = "auto";
  if (element.scrollHeight > mh) {
    element.style.height = mh + "px";
    isFullHeight = true;
  } else {
    element.style.height = element.scrollHeight  + "px";
    isFullHeight = false;
  }
  return isFullHeight;
}

export { autoHeight };
