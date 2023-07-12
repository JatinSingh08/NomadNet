import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { BsFillCameraFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { avatar1 } from "../../backend/db/assets";
import { authSelector } from "../../features/authSlice";
import { createNewPost } from "../../features/postsSlice";
import { userSelector } from "../../features/usersSlice";

const CreatePost = () => {
  const [showEmojiPicker, setEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const emojiIconRef = useRef(null);
  const { usersData } = useSelector(userSelector);
  const { encodedToken, foundUser } = useSelector(authSelector);
  const [postData, setPostData] = useState({
    firstName: foundUser?.firstName,
    lastName: foundUser?.lastName,
    userId: foundUser?._id,
    content: "",
    postMedia: "",
  });
  const dispatch = useDispatch();

  const user = usersData?.find(user => user?.username === foundUser?.username);
  const createPostHandler = () => {
    if (postData.content.trim().length > 0 || postData.postMedia) {
      dispatch(createNewPost({ encodedToken, postData }));
      setPostData({
        ...postData,
        content: "",
        postMedia: "",
      });
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        emojiIconRef.current &&
        !emojiIconRef.current.contains(event.target)
      ) {
        setEmojiPicker(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="card rounded-2xl p-4">
      <h1 className="text-start border-b-2 text-xl">Create Post</h1>
      <div className="border-b-2 mt-4 flex py-4 gap-2 justify-center items-center">
        <img
          src={user?.profile ?? avatar1}
          alt="vatar"
          className="w-14 h-14 rounded-full object-contain"
        />
        <textarea
          placeholder="What is happening?!"
          className="w-full px-4 bg-rose-100 rounded-lg outline-none pt-2 resize-none"
          onChange={(e) =>
            setPostData((val) => ({ ...val, content: e.target.value }))
          }
          value={postData.content}
        ></textarea>
      </div>

      <div className="flex items-center justify-between py-4 px-1">
        <div className="flex items-start gap-2">
          <input type="file" className="hidden" id="fileInput" />
          <label htmlFor="fileInput" className="cursor-pointer">
            <span>
              <BsFillCameraFill className="w-7 h-7 icon-theme" />
            </span>
          </label>

          <label htmlFor="emojis" className="cursor-pointer"></label>
          <span
            ref={emojiIconRef}
            onClick={() => setEmojiPicker((val) => !val)}
            className="icon-theme"
          >
            <BsFillEmojiSmileFill className="w-6 h-6 hover:cursor-pointer" />
          </span>
          <div
            className={`absolute ml-20 z-50 transform ease-in-out duration-700 ${
              showEmojiPicker ? "" : "hidden"
            }`}
            ref={emojiPickerRef}
          >
            {showEmojiPicker && (
              <EmojiPicker
                height="400px"
                onEmojiClick={(e) =>
                  setPostData((val) => ({
                    ...val,
                    content: val.content + e.emoji,
                  }))
                }
              />
            )}
          </div>
        </div>
        <button
          className="button-theme h-8 rounded-2xl"
          onClick={createPostHandler}
        >
          {/* px-2 text-sm w-24 h-7 rounded-2xl text-slate-50 */}
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
