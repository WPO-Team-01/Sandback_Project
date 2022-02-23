import React from "react";
import { useGetContentsQuery } from "../../store/query/contentApi.js";

//MdOutlineFavoriteBorder {data.like_cnt}

const Like = () => {
  const { data, error, isLoading } = useGetContentsQuery();
  console.log(data);

  return <div>{data.content[0].like_cnt}</div>;
};

export default Like;
