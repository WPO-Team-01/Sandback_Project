import React, { useState } from "react";
import { firstValue } from "./styleObject/styleObject";
import { secondValue } from "./styleObject/styleObject";
import { thirdValue } from "./styleObject/styleObject";
import Page from "./Page";

function Tabs() {
  const tags = ["유튜브", "알쓸B잡", "인사이트"];
  const [tagIndex, setTagIndex] = useState(0);

  const handleTag = (index) => {
    setTagIndex(index);
  };
  console.log(tagIndex, tagIndex * 100);

  return (
    <>
      <section className="flex flex-col items-center w-screen h-[80px] ">
        <div className="w-full h-[40px] " /> {/* height 조절이 필요합니다. */}
        <nav className="flex flex-col justify-center w-screen h-[40px] ">
          {/* height 조절이 필요합니다. */}
          <div className="flex justify-center items-center w-full h-full text-[12px]">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTag(index)}
                className="flex justify-center items-center w-1/5 h-full p-5 font-bold ease-in-out transition-all ease-in-out duration-300 active:text-focused whitespace-nowrap "
                style={index === tagIndex ? null : { color: "#828386" }}
              >
                {/* font-size 조절이 필요합니다. */}
                {tag}
              </button>
            ))}
          </div>
          <div
            className={`w-1/5 border-b-[2px] border-custom -mb-1 transition-all ease-in-out duration-300 `}
            style={{ transform: `translateX(${tagIndex * 100}%)` }}
          />
        </nav>
      </section>
      <section className="w-[100vw] h-[100vh] whitespace-nowrap overflow-x-hidden transition-all ease-in-out duration-300 ">
        <Page tagIndex={tagIndex} marginValue={firstValue} />
        <Page tagIndex={tagIndex} marginValue={secondValue} />
        <Page tagIndex={tagIndex} marginValue={thirdValue} />
      </section>
    </>
  );
}

export default Tabs;
