import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useGetContentsQuery as UseGetContentsQuery } from "../../store/query/contentApi";
import Like from "../Like/Like";
import Share from "../Share/Share";

// 탭별로 sectorId 받아서 적용
const Carousel = ({ sectorId = 1 }) => {
  const { data, isLoading } = UseGetContentsQuery();
  const [contents, setContents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      const newContents = data.content.filter(
        (article) => article.like_top === 1 && article.sector_id === sectorId
      );
      setContents(newContents);
    }
  }, [data]);

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
      <h2 className="text-left p-4 text-lg font-bold">새로 올라왔어요</h2>
      {isLoading && (
        <h3 className="text-center p-4 text-2xl font-bold">
          로딩 중입니다. 잠시만 기다려주세요.
        </h3>
      )}
      {!isLoading && (
        <Swiper
          slidesPerView={1}
          initialSlide={1}
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
          onActiveIndexChange={(e) => changeActiveIndex(e)}
          className="mySwiper third:bottom-0"
        >
          {contents.map((content, index) => (
            <SwiperSlide
              key={`${content.id}-${index}`}
              className="h-full flex flex-col justify-center items-center gap-y-1 pb-6"
            >
              <div className="w-full flex justify-center items-center">
                {/* a 태그 추후 상세보기 링크로 연결 필요 */}
                <a
                  href={content.link}
                  rel="noreferrer"
                  className="flex justify-center items-center min-h-[16rem] max-h-[16rem] min-w-[24rem] max-w-sm"
                >
                  <img
                    src={content.image}
                    alt={`${content.title}_img`}
                    className="object-cover min-h-[16rem] max-h-[16rem]"
                  />
                </a>
              </div>
              <div className="w-full flex justify-center items-center">
                {/* a 태그 추후 상세보기 링크로 연결 필요 */}
                <a
                  href={content.link}
                  rel="noreferrer"
                  className="flex flex-col items-center border border-stone-400 rounded min-h-[8rem] max-h-[8rem] min-w-[24rem] max-w-sm shadow-lg font-semibold text-lg p-4"
                >
                  {content.title}
                </a>
              </div>
              {contents[activeIndex - 1] && (
                <div className="w-full flex justify-end items-center min-w-[24rem] max-w-sm gap-4 px-4">
                  <Like data={contents[activeIndex - 1]}></Like>
                  <Share data={contents[activeIndex - 1]}></Share>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
