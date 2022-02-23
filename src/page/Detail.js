import { ExternalLinkIcon, HeartIcon } from "@heroicons/react/outline";
import DetailBtn from "../components/Detail/DetailBtn";
import DetailTitle from "../components/Detail/DetailTitle";
import SectorTitle from "../components/Detail/SectorTitle";
import YoutubeEmbed from "../components/Detail/YoutubeEmbed";
import { SectorType } from "../constants/api";

// const data = {
//   id: 62,
//   sector_id: 2,
//   title: "부동산 시장에도 번진 크립토 금융! 이제 비트코인으로 모기지론 받는다?",
//   body: "최근 암호화폐 가격이 전반적으로 모두 하락하자 비트코인, 이더리움 등 메이저 코인을 장기로 보유하려는 사람들은 오히려 더욱 늘고있습니다. \n\n캐나다 스타트업인 Ledn(레든)은 이런 투자자들을 위해 '비트코인 담보 모기지론' 상품을 내놓는다고 하는데요. 과연 크립토를 부동산 대출에 어떻게 이용하는 것일까요? 함께 알아봅니다.",
//   image:
//     "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_033.png",
//   link: "FyUSkHccOq4",
//   upload_date: "2022-01-29",
//   like_cnt: 0,
//   like_top: 1,
// };

const data = {
  id: 30,
  sector_id: 3,
  title:
    "[Research Report] #2 포트폴리오에 비트코인을 추가하면 오히려 손해보는 날이 적어진다?",
  body: "비트코인은 다른 자산들과 낮은 상관관계를 가지며, 이는 주식, 채권, 금 등 기존 금융 자산에서 발견할 수 없는 독특한 특성입니다.\n\n낮은 상관관계의 이유 세 가지는 다음과 같습니다: \n1) 기존 금융자산과 다른 리스크 팩터 \n2) 비트코인 역할에 대한 다양한 기대감 3) 비트코인 투자자층과 기존 금융 자산 투자자층의 괴리\n\n비트코인의 낮은 상관관계로 포트폴리오의 안정성 향상에 기여할 수 있습니다. → 미국, 한국 60/40 포트폴리오의 손해를 보는 날이 줄어드는 효과 확인할 수 있습니다.",
  image:
    "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-105.png",
  link: "https://www.notion.so/Research-Report-2-4d47efc744fa463696b0dc5e8bc8fa4f",
  upload_date: "2021-10-19",
  like_cnt: 1,
  like_top: 1,
};
export default function Detail({ sectorTitle = "sector title" }) {
  return (
    <div className="flex flex-col max-w-4xl px-4 py-10 mx-auto space-y-6">
      <SectorTitle>{sectorTitle}</SectorTitle>
      {data.sector_id === SectorType.YouTube && data.link && (
        <YoutubeEmbed link={data.link} />
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
