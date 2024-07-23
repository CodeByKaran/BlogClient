import React, { useState, useEffect } from "react";

const useScrollSet = scrollLimit => {
  const [isScrolledToLimit, setIsScrolledToLimit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsScrolledToLimit(scrollPosition >= scrollLimit);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolledToLimit;
};

export { useScrollSet };
