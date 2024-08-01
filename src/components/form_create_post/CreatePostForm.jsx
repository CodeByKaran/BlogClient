import React, { useRef, useEffect, useState, useCallback } from "react";
import Compressor from "compressorjs";
import DesginedTextArea from "../designed_textarea/DesginedTextArea.jsx";
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx";
import SpecialInputField from "../../components/special_input_field/SpecialInputField.jsx";
import Camera from "../../assets/Camera.svg";
import GradientButton from "../buttons/GradientButton.jsx";
import useLocalStorage, { clearSavedValue } from "../../hooks/useLocalStorage.js";
import { FetchData } from "../../utils/Fetch.js";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast.js";
import Spinner from "../spinner/Spinner.jsx";
import useCustomNavigate from "../../hooks/useCustomNavigate.js";

const CreatePostForm = () => {
  const titleRef = useRef();
  const tagsRef = useRef();
  const contentRef = useRef();

  const [title, setTitle] = useLocalStorage("title", "");
  const [tags, setTags] = useLocalStorage("tags", [""]);
  const [loading, setLoading] = useState(false);
  const navigate = useCustomNavigate();

  useEffect(() => {
    if (tags?.includes(",")) {
      setTags(tags.split(","));
    }
  }, [tags]);

  const handlePost = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!(tags instanceof Array) || tags.length < 2) {
      showErrorToast("At least two tags are required!");
      setLoading(false);
      tagsRef.current.focus();
      return;
    }

    const compressImage = (file) => {
      return new Promise((resolve, reject) => {
        new Compressor(file, {
          quality: 0.2,
          success(result) {
            resolve(result);
          },
          error(err) {
            reject(err);
          }
        });
      });
    };

    try {
      const imageFile = contentRef.current.files[0];
      const compressedImage = await compressImage(imageFile);

      const formData = new FormData();
      formData.append("content", title);
      tags.forEach((tag) => formData.append("tags[]", tag));
      formData.append("con_image", compressedImage);

      const config = {
        method: "POST",
        headers: {
          // Note: For multipart/form-data, you don't need to set the Content-Type header; the browser does it automatically
        },
        body: formData,
      };

      await FetchData("/api/v1/blog/create", config);
      clearSavedValue("title");
      clearSavedValue("tags");
      showSuccessToast("Blog posted!");
      navigate("/");
    } catch (err) {
      showErrorToast(err.message);
    } finally {
      setLoading(false);
    }
  }, [title, tags, navigate]);

  return (
    <form className="w-full mt-12 scrollBar" onSubmit={handlePost}>
      <DesginedTextArea
        ref={titleRef}
        val={title}
        setvalue={setTitle}
        label="What's You Feel "
        hint="feels excited! going to New York"
        style={{
          minHeight: "40px",
          maxHeight: "160px",
        }}
      />
      <VerticalSpacer h="30px" />
      <DesginedTextArea
        ref={tagsRef}
        val={tags}
        setvalue={setTags}
        label="Tags"
        hint="add , to separate tags eg: cool,dude"
        style={{
          minHeight: "40px",
          maxHeight: "100px",
        }}
      />
      <VerticalSpacer h="45px" />
      <SpecialInputField svg={Camera} ref={contentRef} />
      <VerticalSpacer h="25px" />
      <GradientButton
        fun={handlePost}
        loading={loading}
        btnText={loading ? <Spinner style={{ borderColor: "#355af7" }} /> : "Post"}
      />
    </form>
  );
};

export default React.memo(CreatePostForm);
