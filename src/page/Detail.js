import { ExternalLinkIcon, HeartIcon } from "@heroicons/react/outline";
import DetailBtn from "../components/Detail/DetailBtn";
import DetailTitle from "../components/Detail/DetailTitle";
import SectorTitle from "../components/Detail/SectorTitle";
import YoutubeEmbed from "../components/Detail/YoutubeEmbed";
import { SectorType } from "../constants/api";

export default function Detail({ closeDetailPage, data }) {
  return (
    <div className="flex flex-col max-w-4xl px-4 py-10 mx-auto space-y-6">
      <SectorTitle onClick={closeDetailPage}>{data.title}</SectorTitle>
      {data.sector_id === SectorType.YouTube && data.link && (
        <YoutubeEmbed link={data.link} />
      )}
      {data.sector_id === SectorType.Opinion && data.image && (
        <img src={data.image} alt="" />
      )}
      <DetailTitle title={data.title} />
      {data.sector_id === SectorType.Insight && data.image && (
        <img src={data.image} alt="" />
      )}
      <p>{data.body}</p>
      <div className="flex justify-center">
        <a
          href={data.link}
          className="px-6 py-2 font-bold text-blue-500 bg-blue-100 rounded-full"
        >
          전체 리포트 읽기
        </a>
      </div>
      <div className="flex mx-auto space-x-6">
        <DetailBtn>
          <HeartIcon className="w-6 h-6" />
          <span>좋아요</span>
        </DetailBtn>
        <DetailBtn>
          <ExternalLinkIcon className="w-6 h-6" />
          <span>공유하기</span>
        </DetailBtn>
      </div>
    </div>
  );
}
