import React from "react";
import { useGetContentsQuery } from "../../store/query/contentApi";
import { MdOutlineFileUpload } from "react-icons/md";

const Share = (props) => {
  const { data } = props;
  const { isLoading } = useGetContentsQuery();

  return (
    <div className="flex justify-center items-center text-slate-400">
      {!isLoading && (
        <button
          onClick={() =>
            window.open(
              `${data.content[data.content.id].link}`,
              "Popup",
              "_blank"
            )
          }
          className="flex justify-center items-center "
        >
          <MdOutlineFileUpload className="mr-1" />
          공유하기
        </button>
      )}
    </div>
  );
};

export default Share;
