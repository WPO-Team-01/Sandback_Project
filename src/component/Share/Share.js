import React from "react";

const data = {
  id: 59,
  sector_id: 1,
  title: "왜 주식과 비트코인은 함께 떨어질까",
  body: null,
  image:
    "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png",
  link: "https://medium.com/sandbank-kr/c7b31c05301b",
  upload_date: "2022-01-29",
  like_cnt: 0,
  like_top: 1,
};

//MdOutlineFileUpload

const Share = () => {
  return (
    <div>
      <button onClick={() => window.open(`${data.link}`, "Popup", "_blank")}>
        공유하기
      </button>
    </div>
  );
};

export default Share;
