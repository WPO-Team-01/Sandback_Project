import React from "react";

const Page2 = ({ tagIndex }) => {
  return (
    <div
      className="absolute w-[100%] h-[100%] bg-[red] transition-all ease-in-out duration-300 "
      style={
        tagIndex === 0
          ? { marginLeft: "100%" }
          : tagIndex === 1
          ? { marginLeft: "0%" }
          : { marginLeft: "-100%" }
      }
    >
      Page2
    </div>
  );
};

export default Page2;
