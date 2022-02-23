import React from "react";
import { useGetContentsQuery } from "../../store/query/contentApi";

//MdOutlineFileUpload

const Share = () => {
  const { data, error, isLoading } = useGetContentsQuery();
  console.log(data);

  return (
    <div>
      <button
        onClick={() =>
          window.open(`${data.content[0].link}`, "Popup", "_blank")
        }
      >
        공유하기
      </button>
    </div>
  );
};

export default Share;
