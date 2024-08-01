import React, { useState, useEffect } from "react";
import AppTitle from "../app_title/AppTitle.jsx";
import Cross from "../../assets/Cross.svg"
import useCustomNavigate from "../../hooks/useCustomNavigate.js";

const HeroUser = () => {
  const navigate = useCustomNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition >= 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCutClick = () => {
    navigate("/", true);
  };

  return (
    <div
      className={`w-full sm:w-full md:w-[80%] lg:w-[60%] h-fit py-2 px-1 ${
        isScrolled && "sticky top-0 left-0 right-0 mx-auto bg-gray-300/10 backdrop-blur"
      }`}
    >
    <div className="flex justify-between px-1 items-stretch w-full h-fit ">
      <div className="w-full pl-[0.45rem] pr-3 py-2 h-fit flex flex-col items-start relative pb-3">
        <div className="flex justify-start items-baseline h-fit leading-none">
          <h2 className="text-start text-[2rem] font-bold tracking-wide text-gray-100">
            Hey ,
          </h2>
          <h1 className="text-start text-[2.5rem] font-bold first-letter:text-[1.6em] first-letter:bg-gradient-to-br from-[#f038ab] to-[#ee3f3f] first-letter:bg-clip-text first-letter:text-transparent tracking-wide text-gray-100 break-normal">
            <strong>Karan</strong>
          </h1>
        </div>
        <h3 className="text-start text-gray-300 text-[1rem] font-semibold flex relative w-fit">
          Happy Posting By{" "}
          <span className="absolute left-[105%] top-[20%] min-w-[100px]">
            <AppTitle stylishtext={false} />
          </span>
        </h3>
      </div>
     <div className="w-fit pt-3 pb-2 pr-3 pl-2" onClick={handleCutClick}>
      <img src={Cross} className="w-6 h-6" alt="Close" />
      </div>
      </div>
    </div>
  );
};

export default HeroUser;
