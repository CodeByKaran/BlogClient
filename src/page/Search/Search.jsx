import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchTopBar from "../../components/search_top_bar/SearchTopBar.jsx";
import ShowUserList from "../../components/show_list/ShowUserList.jsx";
import SearchTag from "../../components/search_tags/SearchTag.jsx";
import { FetchData } from "../../utils/Fetch.js";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast.js";

function Search() {
  const [slicedUser, setSlicedUser] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [page, setPage] = useState(1);
  const [sliceName, setSliceName] = useState("");
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef(null);

  const searchSlicedUsername = useCallback(
    async (sliceName, page = 1, pageSize = 10, controller) => {
      setLoading(true);
      try {
        const res = await FetchData(
          `/api/v1/search/user/usrnm/slice?userN=${sliceName}&page=${page}&pageSize=${pageSize}`,
          { signal: controller.signal }
        );
        setTotalUser(res.data.totalUser);
        setSlicedUser(prevUsers =>
          page === 1 ? [...res.data.results] : [...prevUsers, ...res.data.results]
        );
        setLoading(false);
      } catch (err) {
        showErrorToast(err);
        setLoading(false);
      }
    },
    []
  );

  const handleInput = useCallback(
    e => {
      setSliceName(e.target.value);
    },
    []
  );

  const handleSearchClick = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    if (sliceName) {
      setSlicedUser([]);
      setPage(1);
      searchSlicedUsername(sliceName, 1, 10, controller);
    }
  }, [sliceName, searchSlicedUsername]);

  const fetchMoreUser = useCallback(() => {
    const controller = new AbortController();
    setPage(prevPage => {
      const newPage = prevPage + 1;
      searchSlicedUsername(sliceName, newPage, 10, controller);
      return newPage;
    });
  }, [searchSlicedUsername, sliceName]);

  const handleTagsClick = useCallback(
    async type => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      setSlicedUser([]);
      setLoading(true);
      const controller = new AbortController();
      controllerRef.current = controller;
      let uri;
      if (type === "owner") {
        uri = "/api/v1/search/user/owner";
      } else if (type === "followed") {
        uri = "/api/v1/search/user/mstflwd";
      } else {
        uri = "/api/v1/search/user/all";
      }

      try {
        const res = await FetchData(uri, { signal: controller.signal });
        setSlicedUser(res.data);
      } catch (err) {
        showErrorToast(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

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

  useEffect(() => {
    handleTagsClick("owner");
  }, [handleTagsClick]);

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
      <div className="w-[99%] sm:w-[99%] md:w-[95%]">
        <ShowUserList
          users={slicedUser}
          totalUser={totalUser}
          fetchNext={fetchMoreUser}
          loading={loading}
        />
      </div>
    </div>
  );
}


export default React.memo(Search)