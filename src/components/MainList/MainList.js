import { useGetContentsQuery } from '../../store/query/contentApi';
import Like from '../Like/Like';
import Share from '../Share/Share';

import { useEffect, useState } from 'react';

function MainList() {
  const { data, error, isLoading } = useGetContentsQuery();
  const [contents, setContents] = useState([]);
  const [isOpen, setIsOpen] = useState('더보기');
  console.log(data, isLoading);

  useEffect(() => {
    if (data?.ok) {
      const newContents = data.content.slice(0, 3);
      setContents(newContents);
    }
  }, [data]);

  const handleOpenClick = () => {
    setContents(data.content);
    setIsOpen('접기');
  };

  const handleCloseClick = () => {
    setContents(data.content.slice(0, 3));
    setIsOpen('더보기');
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div className='relative top-5 flex flex-col container w-90 h-auto rounded-md bg-white'>
      <div className=' relative top-3 flex w-90 h-100 border-4'>
        {/*data.sector의 인덱스에 따라서 변경해주어야함*/}
        <div className='text-xl font-normal pr-1.5'>{data.sector[1].title}</div>
        <div className='w-20 h-7 bg-red-700 rounded-md text-white'>
          {data.sector[1].type}
        </div>
      </div>
      {!isLoading &&
        contents.map(el => {
          if (el.sector_id === 1) {
            //  const sector = data?.content.filter((el) => el.sector_id === 1);
            // function MainList({ sector }) {
            //sectorContent.map해서 보여주기
            return (
              <div className='flex justify-center w-90 h-50 ' key={el.id}>
                <div className='w-90 h-30'>
                  <img src={el.image}></img>
                  <div className='w-60 h-20 bg-orange-50'>
                    <p>{el.upload_date}</p>
                    <Like />
                    <Share />
                  </div>
                </div>
              </div>
            );
          }
        })}
      <button
        className='w-60 h-8 bg-cyan-100 rounded-md text-blue-500'
        onClick={() => {
          if (isOpen === '더보기') handleOpenClick();
          if (isOpen === '접기') handleCloseClick();
        }}
      >
        {isOpen}
      </button>
    </div>
  );
}
export default MainList;
