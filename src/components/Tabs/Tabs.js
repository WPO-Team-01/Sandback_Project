import React, { useState } from "react";
import { firstValue } from "./styleObject/styleObject";
import { secondValue } from "./styleObject/styleObject";
import { thirdValue } from "./styleObject/styleObject";
import Page from "./Page";

function Tabs() {
  const tags = ["유튜브", "알쓸B잡", "인사이트", "퀴즈", "마켓"];
  const [tagIndex, setTagIndex] = useState(0);

  const handleTag = (index) => {
    setTagIndex(index);
  };

  return (
    <>
      <section className="flex flex-col items-center w-screen h-[90px] ">
        <div className="w-full h-[40px] " /> {/* height 조절이 필요합니다. */}
        <nav className="flex flex-col justify-center w-screen h-[40px] ">
          {/* height 조절이 필요합니다. */}
          <div className="flex justify-center items-center w-full h-full text-[12px]">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTag(index)}
                className="flex justify-center items-center w-1/3 h-full p-5 font-bold ease-in-out transition-all ease-in-out duration-300 active:text-[#cfd1d6] whitespace-nowrap "
                style={index === tagIndex ? null : { color: "#828386" }}
              >
                {/* font-size 조절이 필요합니다. */}
                {tag}
              </button>
            ))}
          </div>
          <div
            className={`w-1/3 border-b-[2px] border-[#3579f6] -mb-1 transition-all ease-in-out duration-300 `}
            style={{ transform: `translateX(${tagIndex * 100}%)` }}
          />
        </nav>
      </section>
      <section className="w-[100vw] h-[100vh] transition-all ease-in-out duration-300 ">
        <Page tagIndex={tagIndex} marginValue={firstValue} />
        <Page tagIndex={tagIndex} marginValue={secondValue} />
        <Page tagIndex={tagIndex} marginValue={thirdValue} />
      </section>
    </>
  );
}

export default Tabs;
