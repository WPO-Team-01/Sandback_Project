import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useGetContentsQuery as UseGetContentsQuery } from "../../store/query/contentApi";

const Carousel = ({ carouselContents, sectorId = 1 }) => {
  const { data } = UseGetContentsQuery();
  const [contents, setContents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (data?.ok) {
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
              <a href={content.link} rel="noreferrer">
                <img src={content.image} alt={`${content.title}_img`} />
              </a>
            </div>
            <div>
              <a href={content.link} rel="noreferrer">
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
