import DetailTitle from "../components/Detail/DetailTitle";
import SectorTitle from "../components/Detail/SectorTitle";
import YoutubeEmbed from "../components/Detail/YoutubeEmbed";
import { SectorType } from "../constants/api";
import { useGetContentsQuery } from "../store/query/contentApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Like from "../components/Like/Like";
import Share from "../components/Share/Share";

export default function Detail({ sectorTitle = "sector title" }) {
  const { id } = useParams();
  const { data: list, error, isLoading } = useGetContentsQuery();

  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    if (id && !isLoading) {
      const pageData = list.content.find((item) => item.id === Number(id));
      setData(pageData);
    }
  }, [id, list, isLoading]);

  if (error) {
    return <div>{error}</div>;
  }

  return !data || isLoading ? (
    <div>로딩중입니다.</div>
  ) : (
    <div className="flex flex-col max-w-4xl px-4 py-10 mx-auto space-y-6">
      <SectorTitle>{sectorTitle}</SectorTitle>
      {data.sector_id === SectorType.YouTube && data.link && (
        <YoutubeEmbed link={data.link} />
      )}
      <DetailTitle title={data.title} />
      {data.sector_id === SectorType.Insight && data.image && (
        <img src={data.image} alt="" />
      )}
      <p className="text-left whitespace-pre-line">{data.body}</p>
      <div className="flex justify-center">
        <a
          href={data.link}
          className="px-6 py-2 font-bold text-blue-500 bg-blue-100 rounded-full"
        >
          전체 리포트 읽기
        </a>
      </div>
      <div className="flex mx-auto space-x-6">
        <Like isDetail={true} data={data} />
        <Share data={data} />
      </div>
    </div>
  );
}
