import React, { useState } from "react";

const dummyArr = [
  {
    id: 63,
    sector_id: 1,
    title: "디지털 위안화 나오면 비트코인 더 필요해진다",
    body: null,
    image:
      "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_024.png",
    link: "https://medium.com/sandbank-kr/46cd56322be6",
    upload_date: "2022-02-16",
    like_cnt: 0,
    like_top: 1,
  },
  {
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
  },
  {
    id: 58,
    sector_id: 1,
    title: "[칼럼] 비트코인 도미넌스 바로알기",
    body: null,
    image:
      "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_022.png",
    link: "https://medium.com/sandbank-kr/946d87433d4",
    upload_date: "2022-01-21",
    like_cnt: 0,
    like_top: 1,
  },
];

const Carousel = ({ carouselContents }) => {
  const [contents, setContents] = useState(dummyArr);

  return (
    <div>
      <ul>
        {contents.map((content) => (
          <li>{content.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
