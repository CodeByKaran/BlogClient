import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchTopBar from "../../components/search_top_bar/SearchTopBar.jsx";
import ShowUserList from "../../components/show_list/ShowUserList.jsx";
import SearchTag from "../../components/search_tags/SearchTag.jsx";
import { FetchData } from "../../utils/Fetch.js";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast.js";
import FetchAndShow from "../../common/fetch_and_show/FetchAndShow.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"




function Search() {


  const [isScrolled, setIsScrolled] = useState(false);
  const [uri,setUri]= useState("/api/v1/search/user/owner")
  const [isSearchClick,setIsSearchClick] = useState(false)
  const [sliceName,setSliceName] = useState("")


  const handleInput = useCallback(
    e => {
      setSliceName(e.target.value);
    },
    []
  );

  const handleTagsClick = useCallback(
    async type => {
       
      setIsSearchClick(false)
      if (type === "owner") {
        setUri("/api/v1/search/user/owner")
      } else if (type === "followed") {
        setUri("/api/v1/search/user/mstflwd");
      } else {
        setUri("/api/v1/search/user/all");
      }
    },
    []
  );

   const handleSearchClick = () => {
     
      setIsSearchClick(true)
      setUri(`/api/v1/search/user/usrnm/slice?userN=${sliceName}`)
   };
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition >= 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div className="text-white w-full sm:w-full md:w-[80%] lg:w-[60%] overflow-y-scroll flex flex-col items-center scrollBar pb-[76px]">
      <div
        className={`top-0 pt-2 px-3 w-full sm:w-full md:w-[80%] lg:w-[60%] z-50 ${
          isScrolled && "blur_effect_two"
        } fixed h-fit`}
      >
        <SearchTopBar handleInput={handleInput} fun={handleSearchClick} />
        <SearchTag handleClick={handleTagsClick} />
      </div>
      <div className="w-full h-[120px]"></div>
      <div className="w-[99%] sm:w-[99%] md:w-[95%] ">
       <FetchAndShow 
        URI={uri}
        CONFIG={{
           method:"GET",
           credentials:"include"
        }}
        DF={isSearchClick?["data","results"]:["data"]}
        TDF="totalUser"
        PAGE={isSearchClick&&1}
        PAGESIZE={isSearchClick&&10}
       />
      </div>
    </div>
  );
}


export default React.memo(Search)