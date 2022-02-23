import React from "react";

const Page1 = ({ tagIndex }) => {
  return (
    <div
      className="absolute w-[100%] h-[100%] bg-[black] transition-all ease-in-out duration-300"
      style={
        tagIndex === 0
          ? { marginLeft: "0%" }
          : tagIndex === 1
          ? { marginLeft: "-100%" }
          : { marginLeft: "-200%" }
      }
    >
      Page1
    </div>
  );
};

export default Page1;
