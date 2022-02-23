import React, { useEffect, useState } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const Like = props => {
  const { data } = props;
  const [likeClicked, setLikeClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    () => JSON.parse(window.localStorage.getItem('likeCount')) || 0,
  );

  useEffect(() => {
    window.localStorage.setItem('likeCount', JSON.stringify(likeCount));
  }, [likeCount]);

  const likeCounting = () => {
    setLikeClicked(!likeClicked); // 현재 상태의 반대되는 boolean값으로 변경해준다
    if (!likeClicked) {
      //false
      setLikeCount(likeCount + 1);
    } else if (likeClicked) {
      // true
      setLikeCount(likeCount - 1);
    }
  };

  // 새로고침 감지 시 local storage의 likeCount 리셋
  window.addEventListener('beforeunload', () => {
    window.localStorage.removeItem('likeCount');
  });

  return (
    <div className='flex justify-center items-center'>
      <span
        onClick={() => likeCounting()}
        className='flex justify-center items-center cursor-pointer text-slate-400'
      >
        {likeClicked === false ? (
          <MdOutlineFavoriteBorder className='mr-1' />
        ) : (
          <MdOutlineFavorite className='mr-1 text-red-500' />
        )}
        {data.like_cnt}
      </span>
    </div>
  );
};

export default Like;
