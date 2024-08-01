import React, { useEffect, useState, useCallback, useRef } from "react";
import { FetchData } from "../../utils/Fetch.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/spinner/Spinner.jsx";
import UserList from "../../components/searched_users/UserList.jsx";
import { useLocation } from "react-router-dom";
import { showErrorToast } from "../../utils/ShowToast.js";
import useCustomNavigate from "../../hooks/useCustomNavigate.js"


const FetchAndShow = ({ USERID, URI, CONFIG, PAGE, PAGESIZE, DF, TDF }) => {
   
  const navigate = useCustomNavigate();
  const [dataList, setDataList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(PAGE || 1);
  const [pageSize, setPageSize] = useState(PAGESIZE || 10);
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef(null);
  const location = useLocation();

  const fetchUserData = useCallback((paraOne) => {
    const controller = new AbortController();
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = controller;
    const EXTRA_URI = PAGE?`${URI?.includes("?") ? "&" : "?"}&page=${page}&pageSize=${pageSize}`:"";
    setLoading(true);
    FetchData(
      `${URI}${EXTRA_URI}`,
      { ...CONFIG, signal: controller.signal }
    )
      .then((res) => {
        //console.log(res);
        setDataList((prev) =>
          DF.length === 2 ? [...prev, ...res[DF[0]][DF[1]]] : [...prev, ...res[DF[0]]]
        );
        setTotalData(PAGE ? res.data[TDF] : res[DF[0]]?.length);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          navigate(-1,true)
          showErrorToast(err.toString());
        }
      })
      .finally(() => setLoading(false));
  }, [pageSize, URI, CONFIG, DF, TDF]);

  const fetchNext = useCallback(() => {
    const nextPage = page + 1;
    fetchUserData(nextPage);
    setPage(nextPage);
  }, [fetchUserData, page]);

  const handleFollow = (user) => {
    FetchData(`/api/v1/follow/user/to/${user}`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        setDataList((prevDataList) =>
          prevDataList.map((data) =>
            data._id === user ? { ...data, isFollowed: true } : data
          )
        );
      })
      .catch((err) => showErrorToast(err));
  };

  const handleUnfollow = (user) => {
    FetchData(`/api/v1/follow/user/unfollow/${user}`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        setDataList((prevDataList) =>
          prevDataList.map((data) =>
            data._id === user ? { ...data, isFollowed: false } : data
          )
        );
      })
      .catch((err) => showErrorToast(err));
  };

  useEffect(() => {
    setDataList([])
    fetchUserData(page);
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [URI]);

  return (
    <div>
      {loading && dataList.length === 0 ? (
        <Spinner style={{marginTop:"20px"}}/>
      ) : (
        <InfiniteScroll
          dataLength={dataList.length}
          next={fetchNext}
          hasMore={dataList.length < totalData}
          loader={<Spinner />}
        >
          {dataList.map((data, index) => (
            <UserList
              key={index}
              showborder={dataList.length - 1 === index ? false : true}
              user={data}
              ticking={true}
              handleFollow={handleFollow}
              handleUnfollow={handleUnfollow}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default FetchAndShow;
