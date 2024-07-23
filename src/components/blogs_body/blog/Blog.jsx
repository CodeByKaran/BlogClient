import React,{useState,useEffect} from "react";
import Card from "../../card/Card.jsx";
import FetchCustomBlog from "../../../common/fetch_custom_blog/FetchCustomBlog.jsx"
import { useParams } from "react-router-dom";



const Blog = () => {
   
   const { userId } = useParams();
   
   
  return (
    <div className="w-full pt-2 pb-3 flex-col items-center px-1 mt-3">
      <FetchCustomBlog
        URI={`/api/v1/blog/fetch/by/user?userId=${userId}`}
        QUERY={[
          { key: "userId", value: userId },
          { key: "page", value: "1" }
        ]}
        CONFIG={{
          method: "GET"
        }}
      />
    </div>
  );
};

export default Blog;
