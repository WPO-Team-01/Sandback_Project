import React from "react";
import { useGetContentsQuery } from "../../store/query/contentApi";
import { MdOutlineFileUpload } from "react-icons/md";

const Share = () => {
  const { data, error, isLoading } = useGetContentsQuery();

  return (
    <div>
      <MdOutlineFileUpload />
      {!isLoading && (
        <button
          onClick={() =>
            window.open(`${data.content[0].link}`, "Popup", "_blank")
          }
        >
          공유하기
        </button>
      )}
    </div>
  );
};

export default Share;
