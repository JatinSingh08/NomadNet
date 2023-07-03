import React, { useState, useEffect, useRef } from "react";
import { profileImage } from "../../assets";
import { BsFillCameraFill, BsFillEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

const CreatePost = () => {
  const [showEmojiPicker, setEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const emojiIconRef = useRef(null);

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
    <div className="shadow card rounded-2xl p-4">
      <h1 className="text-start border-b-2 text-xl">Create Post</h1>
      <div className="border-b-2 mt-4 flex py-4">
        <img
          src={profileImage}
          alt=""
          className="w-16 h-16 rounded-full object-contain"
        />
        <textarea
          placeholder="What is happening?!"
          className="w-full px-4 bg-rose-100 rounded-lg outline-none pt-2 resize-none"
        ></textarea>
      </div>

      <div className="flex items-center justify-between py-4 px-1">
        <div className="flex items-start gap-2">
          <input type="file" className="hidden" id="fileInput" />
          <label htmlFor="fileInput" className="cursor-pointer">
            <span>
              <BsFillCameraFill className="w-7 h-7" />
            </span>
          </label>

          <label htmlFor="emojis" className="cursor-pointer"></label>
          <span
            ref={emojiIconRef}
            onClick={() => setEmojiPicker((val) => !val)}
          >
            <BsFillEmojiSmileFill className="w-6 h-6 hover:cursor-pointer" />
          </span>
          <div
            className={`absolute ml-20 z-50 transform ease-in-out duration-700 ${
              showEmojiPicker ? "" : "hidden"
            }`}
            ref={emojiPickerRef}
          >
            {showEmojiPicker && <EmojiPicker height="400px" />}
          </div>
        </div>
        <button className="button text-slate-100 text-lg rounded-lg shadow-lg px-8 py-1 font-semibold">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
