import React, { useState } from "react";
import { useGetContentsQuery } from "../../store/query/contentApi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Like = () => {
  const { data, error, isLoading } = useGetContentsQuery();
  const [likeClicked, setLikeClicked] = useState(false);

  const likeCounting = () => {
    setLikeClicked(!likeClicked);
  };

  return (
    <div>
      <span onClick={() => likeCounting()}>
        {likeClicked === false ? (
          <MdOutlineFavoriteBorder />
        ) : (
          <MdOutlineFavorite />
        )}
        {!isLoading && data.content[0].like_cnt}
      </span>
    </div>
  );
};

export default Like;
