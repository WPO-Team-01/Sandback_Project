import { useGetContentsQuery } from "../../store/query/contentApi";
import Like from "../Like/Like";
import Share from "../Share/Share";

import { useState } from "react";

function MainList({ openDetail, sectorContents }) {
  const { isLoading } = useGetContentsQuery();
  const sectorSlice = sectorContents.slice(0, 3);

  const [contents, setContents] = useState(sectorSlice);
  // console.log(data, isLoading);

  // useEffect(() => {
  //   if (sectorContents) {
  //     const newContents = sectorContents.slice(0, 3);
  //     setContents(newContents);
  //   }
  // }, [sectorContents]);

  const handleClick = () => {
    setContents(sectorContents);
    //버튼 더보기/접기 이름도 상태에 따라 변경시키기
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  return (
    <div className="container w-80 h-auto border-2 rounded-md">
      <div className="justify_between flex w-80 h-100 border-4 border-stone-800">
        {/*data.sector의 인덱스에 따라서 변경해주어야함*/}
        <div className="text-xl font-normal pr-1.5">블록체인 NOW</div>
        <div className="w-20 h-7 bg-red-700 rounded-md text-white">Youtube</div>
      </div>
      {!isLoading &&
        contents.map((el) => {
          return (
            <div
              className="flex justify-center w-70 h-50 border-2 border-red-500"
              key={el.id}
            >
              <div
                className="w-60 h-40 border-2  border-blue-900 rounded-md"
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
        className="w-100 h-8 bg-cyan-100 rounded-md text-blue-500"
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
