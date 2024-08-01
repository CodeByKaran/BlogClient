import React from 'react';
import FetchAndShow from "../../common/fetch_and_show/FetchAndShow.jsx";
import {useParams} from "react-router-dom";


const Follower = () => {
   
   const {userId} = useParams();
   
  return (
    <div className="w-full md:w-[98%] my-3">
      <FetchAndShow 
        USERID={userId}
        URI={`/api/v1/follow/user/getList`}
        CONFIG={{
           method:"GET",
           credentials:"include"
        }}
        PAGE={1}
        PAGESIZE={10}
        DF={["data","result"]}
        TDF={"totalResult"}
      />
    </div>
  )
}

export default Follower