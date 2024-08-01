import React, { useEffect, useState } from "react";
import UserPhoto from "../user_photo/UserPhoto.jsx";
import ButtonBlack from "../buttons/ButtonBlack.jsx";
import ButtonWhite from "../buttons/ButtonWhite.jsx";
import Badge from "../badges/Badge.jsx";
import { FetchData } from "../../utils/Fetch.js";
import { useParams } from "react-router-dom";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast.js";
import useCustomNavigate from "../../hooks/useCustomNavigate.js";

const BlogHead = () => {
  const navigate = useCustomNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchUser = async () => {
      try {
        let res = await FetchData(`/api/v1/user/get/user?userId=${userId}`, {
          signal
        });
        setUser(res.data)
      } catch (error) {
        navigate(-1,true);
        showErrorToast(error.toString());
      }
    };
    fetchUser();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="pt-5 px-2 pb-2">
      <div className="flex justify-between items-center ">
        <div className="flex">
          <div>
            <UserPhoto src={user?.avatar} showBorder={false} />
          </div>
          <div className="flex-col justify-start items-start leading-[1.1] ml-2">
            <h1 className="text-start text-gray-200 text-[18px] font-semibold">
              {user?.username}
            </h1>
            <p className="text-start text-gray-300 text-[12px] font-normal">
              {user?.followers} • followers
            </p>
          </div>
        </div>
        <div>
          <ButtonWhite
            text={user?.isFollowed ? "followed ✔️" : "unfollowed"}
            radius="25px"
            size="14px"
            style={{
              padding: "8px 14px 8px 14px"
            }}
            effect={false}
          />
        </div>
      </div>
      <div className="flex justify-start flex-wrap mt-3">
        {user?.tags?.map((e, i) => (
          <Badge key={i} text={e} isFirst={i == 0 ? true : false} />
        ))}
      </div>
      <p className=" text-start text-gray-200 font-normal text-sm  mt-3 leading-[1.1]">
        {user?.bio}
      </p>
    </div>
  );
};

export default BlogHead;
