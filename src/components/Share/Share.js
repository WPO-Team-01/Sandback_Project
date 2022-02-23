import React from "react";
import { useGetContentsQuery } from "../../store/query/contentApi";
import { MdOutlineFileUpload } from "react-icons/md";

const Share = () => {
  const { data, error, isLoading } = useGetContentsQuery();

  return (
    <div className="flex justify-center items-center text-slate-400">
      {!isLoading && (
        <button
          onClick={() =>
            window.open(`${data.content[0].link}`, "Popup", "_blank")
          }
          className="flex justify-center items-center "
        >
          <MdOutlineFileUpload className="mr-2" />
          공유하기
        </button>
      )}
    </div>
  );
};

export default Share;
