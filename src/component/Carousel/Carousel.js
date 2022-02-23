import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const changeActiveIndex = (e) => {
    const activeIndex =
      e.activeIndex > contents.length
        ? 1
        : e.activeIndex < 1
        ? contents.length
        : e.activeIndex;
    setActiveIndex(activeIndex);
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={"mySwiper"}
        style={{}}
        onActiveIndexChange={(e) => changeActiveIndex(e)}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={`${content.id}-${index}`} className="flex flex-row">
            <div>
              <a href={content.link} target="_blank" rel="noreferrer">
                <img src={content.image} alt={`${content.title}_img`} />
              </a>
            </div>
            <div>
              <a href={content.link} target="_blank" rel="noreferrer">
                <div>{content.title}</div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
