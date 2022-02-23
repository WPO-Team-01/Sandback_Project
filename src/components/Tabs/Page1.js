import { useState } from "react";
import Detail from "../../page/Detail";
import Contents from "../../page/Contents";
import { useGetContentsQuery } from "../../store/query/contentApi";

const Page1 = ({ tagIndex, className, styleOption, sectorId }) => {
  const [detailStatus, setDetailStatus] = useState(false);
  const [contentData, setContentData] = useState({});
  const { data, isLoading, error } = useGetContentsQuery();

  const sector = data?.content.filter((el) => el.sector_id === sectorId);

  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  }

  if (error) {
    return <div>오류가 발생했어요!!</div>;
  }

  const openDetailPage = (id) => {
    setDetailStatus(true);
    const findContent = sector.filter((el) => el.id === id)[0];
    setContentData(findContent);
  };

  const closeDetailPage = () => {
    setDetailStatus(false);
  };

  return (
    <div
      className={className}
      style={
        tagIndex === 0
          ? styleOption.firstOption
          : tagIndex === 1
          ? styleOption.secondOption
          : styleOption.threeOption
      }
    >
      {detailStatus ? (
        <Detail closeDetailPage={closeDetailPage} data={contentData} />
      ) : (
        <Contents
          openDetailPage={openDetailPage}
          sectorContents={sector}
          sectorId={sectorId}
        />
      )}
    </div>
  );
};

export default Page1;
