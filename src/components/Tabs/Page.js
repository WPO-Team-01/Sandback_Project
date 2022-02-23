import React from "react";

const Page = ({ tagIndex, marginValue }) => {
  return (
    <div
      className="absolute w-[100%] h-[100%] bg-[black] transition-all ease-in-out duration-300"
      style={
        tagIndex === 0
          ? { marginLeft: marginValue[0] }
          : tagIndex === 1
          ? { marginLeft: marginValue[1] }
          : { marginLeft: marginValue[2] }
      }
    >
      Page1
    </div>
  );
};

export default Page;
