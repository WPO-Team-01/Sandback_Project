import React from "react";

const Page3 = ({ tagIndex }) => {
  return (
    <div
      className="absolute w-[100%] h-[100%] bg-[blue] transition-all ease-in-out duration-300 "
      style={
        tagIndex === 0
          ? { marginLeft: "200%" }
          : tagIndex === 1
          ? { marginLeft: "100%" }
          : { marginLeft: "0%" }
      }
    >
      Page3
    </div>
  );
};

export default Page3;
