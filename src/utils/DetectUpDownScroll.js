let lastScrollTop = 0;

function detectUpDownScroll() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(currentScrollTop<=50){
     return true
  }
  const scrollingDown = currentScrollTop > lastScrollTop;
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  return scrollingDown;
}

export {
   detectUpDownScroll
}
