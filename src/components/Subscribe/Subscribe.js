import React from "react";

const Subscribe = () => {
  const handSubClick = () => {
    window.open("https://sandbank.io");
  }

  return (
    <div>
      <div className="flex justify-center items-center bg-white rounded-xl">
        <div>
          <div>매주 새로운 코인 지식을 드려요</div>
          <div className='text-xl'>샌드뱅크 오리지널</div>
        </div>
        <button className="p-2.5 border m-10 rounded-xl bg-blue-500 text-white"
        onClick={handSubClick}>
          구독하기
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
