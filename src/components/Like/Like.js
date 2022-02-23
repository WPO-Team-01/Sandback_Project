import React, { useEffect, useState } from "react";
import { useGetContentsQuery } from "../../store/query/contentApi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Like = () => {
  const { data, error, isLoading } = useGetContentsQuery();
  const [likeClicked, setLikeClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    () => JSON.parse(window.localStorage.getItem("likeCount")) || 0
  );

  useEffect(() => {
    window.localStorage.setItem("likeCount", JSON.stringify(likeCount));
  }, [likeCount]);

  const likeCounting = () => {
    setLikeClicked(!likeClicked);
    setLikeCount(likeCount + 1);
  };

  // 새로고침 감지 시 local storage 리셋
  window.addEventListener("beforeunload", () => {
    window.localStorage.clear();
  });

  return (
    <div className="flex justify-center items-center">
      <span
        onClick={() => likeCounting()}
        className="flex justify-center items-center cursor-pointer text-slate-400"
      >
        {likeClicked === false ? (
          <MdOutlineFavoriteBorder className="mr-2" />
        ) : (
          <MdOutlineFavorite className="mr-2 text-red-500" />
        )}
        {!isLoading && data.content[0].like_cnt}
      </span>
    </div>
  );
};

export default Like;
