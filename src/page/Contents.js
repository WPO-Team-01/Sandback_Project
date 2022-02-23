import Carousel from "../components/Carousel/Carousel";
import Subscribe from "../components/Subscribe/Subscribe";
import MainList from "../components/MainList/MainList";

const Contents = ({ openDetailPage, sectorContents, sectorId }) => {
  console.log(sectorContents);
  return (
    <>
      <Carousel sectorId={sectorId} />
      <Subscribe />
      <MainList openDetail={openDetailPage} sectorContents={sectorContents} />
    </>
  );
};

export default Contents;
