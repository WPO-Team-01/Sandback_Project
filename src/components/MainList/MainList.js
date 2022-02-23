import { useGetContentsQuery } from "../../store/query/contentApi";
import Like from "../Like/Like";
import Share from "../Share/Share";

import { useState } from "react";

function MainList({ openDetail, sectorContents }) {
  const { isLoading } = useGetContentsQuery();
  const sectorSlice = sectorContents.slice(0, 3);

  const [contents, setContents] = useState(sectorSlice);

  const handleClick = () => {
    setContents(sectorContents);
    //버튼 더보기/접기 이름도 상태에 따라 변경시키기
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div className="container flex flex-col justify-center h-auto mx-auto mt-5 bg-white border-2 rounded-md w-80">
      <div className="flex justify_between w-80 h-100">
        {/*data.sector의 인덱스에 따라서 변경해주어야함*/}
        <div className="text-xl font-normal pr-1.5 mx-auto">블록체인 NOW</div>
        <div className="w-20 text-white rounded-md h-7">Youtube</div>
      </div>
      {!isLoading &&
        contents.map((el) => {
          return (
            <div className="flex justify-center w-70 h-50" key={el.id}>
              <div
                className="h-40 my-5 rounded-md w-60"
                onClick={() => openDetail(el.id)}
              >
                <img src={el.image}></img>
                <p>{el.upload_date}</p>
                <Like />
                <Share />
              </div>
            </div>
          );
        })}
      <button
        className="h-8 text-blue-500 rounded-md w-100 bg-cyan-100"
        onClick={() => {
          handleClick();
        }}
      >
        더보기
      </button>
    </div>
  );
}
export default MainList;
