import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const Share = (props) => {
  const { data } = props;

  return (
    <div className="flex justify-center items-center text-slate-400">
      {
        <button
          onClick={() => window.open(`${data.link}`, "Popup", "_blank")}
          className="flex justify-center items-center "
        >
          <MdOutlineFileUpload className="mr-1" />
          공유하기
        </button>
      }
    </div>
  );
};

export default Share;
