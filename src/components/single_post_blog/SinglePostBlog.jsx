import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../utils/Fetch";
import { formatDate, formatDateTime } from "../../utils/FormatData";
import SinglePostTopBar from "../single_post_topbar/SinglePostTopBar";
import VerticalSpacer from "../spacer/VerticalSpacer";
import Badge from "../badges/Badge";
import { useInView } from "react-intersection-observer";
import { showErrorToast } from "../../utils/ShowToast";

const SinglePostBlog = () => {
  const { blogId } = useParams();
  const [user, setUser] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchData(`/api/v1/blog/fetch/one/${blogId}`);
        setUser(response.data);
      } catch (error) {
        showErrorToast(error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to abort fetch if component unmounts
      const controller = new AbortController();
      controller.abort();
    };
  }, [blogId]);

  const addCloudinaryTransformations = (url, transformations) => {
    if (!url) return ""; // Handle case where url is undefined or null

    const parts = url.split("/upload/");
    if (parts.length < 2) return url; // Return original url if split doesn't work as expected

    return `${parts[0]}/upload/${transformations}/${parts[1]}`;
  };

  return (
    <div className="text-gray-200 flex flex-col items-center w-full">
      <SinglePostTopBar user={user} />
      <VerticalSpacer h="25px" />
      <div className="w-[95%] flex flex-col items-center">
        <div ref={ref} className="w-full">
          {inView ? (
            <picture>
              <source
                srcSet={addCloudinaryTransformations(
                  user?.contentimg,
                  "f_auto,q_auto,w_800"
                )}
                type="image/webp"
              />
              <source
                srcSet={addCloudinaryTransformations(
                  user?.contentimg,
                  "f_auto,q_auto,w_800"
                )}
                type="image/jpeg"
              />
              <img
                src={addCloudinaryTransformations(
                  user?.contentimg,
                  "f_auto,q_auto,w_800"
                )}
                className="w-full object-cover rounded"
                loading="lazy"
              />
            </picture>
          ) : (
            <div className="w-full h-64 bg-gray-300 rounded animate-pulse"></div>
          )}
        </div>
        <div className="flex flex-wrap justify-start w-full mt-5">
          <Badge
            text={`likes • ${user?.likes}`}
            color1="#f56788"
            color2="#f160b2"
          />
          <Badge
            text={`comments • ${user?.totalComments}`}
            color1="#6c9eee"
            color2="#8565f5"
          />
          <Badge
            text={`saves • ${user?.saves}`}
            color1="#a870ef"
            color2="#aa93e8"
          />
        </div>
      </div>
      <p className="text-[#cbcbcb] text-[14px] font-normal text-start mt-3 leading-[1.3] w-full pl-4 pr-2 ">
        {user?.content}
      </p>
      <div className="w-full flex justify-start pl-4 pr-3 pt-2 items-center">
        <p className="text-start text-gray-400 font-medium text-[12px]">
          {formatDate(user?.createdAt)}
        </p>
        <span className="border-r h-[12px] border-gray-400/50 mx-2"></span>
        <p className="text-start text-gray-400 font-medium text-[12px]">
          {formatDateTime(user?.createdAt).slice(-6)}
        </p>
      </div>
    </div>
  );
};

export default SinglePostBlog;
