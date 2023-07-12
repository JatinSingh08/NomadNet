import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, postsSelector } from "../../features/postsSlice";
import { authSelector } from "../../features/authSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IoCloseCircleOutline } from "react-icons/io5";

const EditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  userDetails,
  postData,
}) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  const { postsData } = useSelector(postsSelector);
  const [editContent, setEditContent] = useState({
    content: postData?.content,
    postMedia: "",
  });

  // const [review, setReview] = useState({
  //   rating: null,
  //   comment: ''
  // })

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const post = postsData?.find((post) => post?._id === postData?._id);
  const editedPost = {
    ...post,
    content: editContent?.content,
    postMedia: editContent?.postMedia,
  };

  const editPostHandler = (e) => {
    e.preventDefault();
    if (editContent.content.trim().length || editContent.postMedia) {
      dispatch(editPost({ encodedToken, postData: editedPost }));
    }

    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-600 bg-opacity-75">
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white w-96 h-80 p-6 rounded-lg shadow-lg m relative"
          >
            <div
              className="absolute right-5 top-5 cursor-pointer"
              onClick={() => setIsEditModalOpen(false)}
            >
              <IoCloseCircleOutline className="w-5 h-5" />
            </div>
            <div className="flex gap-2">
              <img
                src={userDetails?.profile}
                alt="avatar"
                className="w-10 h-10 object-contain rounded-full"
              />
              <div className="flex-col text-start ">
                <h1 className="font-semibold text-[16px]">
                  {userDetails?.firstName + " " + userDetails?.lastName}
                </h1>
                <p className="text-[12px] text-[#A6A0B9] -mt-1.5">
                  @{userDetails?.username}
                </p>
              </div>
            </div>

            {/* <div className='mt-4 flex-col gap-10 '> */}
            <textarea
              placeholder="What is happening?!"
              className="w-full px-4 mt-4  bg-rose-100 h-40 rounded-lg outline-none pt-2 resize-none"
              onChange={(e) =>
                setEditContent((val) => ({ ...val, content: e.target.value }))
              }
              value={editContent?.content}
            ></textarea>
            <div className="flex items-center justify-end">
              <button
                className="button-theme rounded-2xl h-8 flex items-center justify-center mt-4"
                onClick={editPostHandler}
              >
                Save
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
