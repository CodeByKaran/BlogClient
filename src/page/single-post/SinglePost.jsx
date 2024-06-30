import React from "react";
import SinglePostTopBar from "../../components/single_post_topbar/SinglePostTopBar.jsx";
import SinglePostBlog from "../../components/single_post_blog/SinglePostBlog.jsx";
import SinglePostComment from "../../components/single_post_comment/SinglePostComment.jsx";
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx";


const SinglePost = () => {

  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%]">
      <SinglePostBlog/>
      <SinglePostComment />
    </div>
  );
};

export default SinglePost;
