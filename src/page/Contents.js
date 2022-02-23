import Carousel from "../components/Carousel/Carousel";
import Subscribe from "../components/Subscribe/Subscribe";
import MainList from "../components/MainList/MainList";

const Contents = ({ openDetailPage, sectorContents }) => {
  console.log(sectorContents);
  return (
    <>
      <Carousel />
      <Subscribe />
      <MainList
        openDetail={() => openDetailPage}
        sectorContents={sectorContents}
      />
    </>
  );
};

export default Contents;
