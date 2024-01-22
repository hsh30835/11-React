import React from 'react';
import './3page.css';
import pettales from './pettales.png';

const Page3 = () => {
  return (
    <>
    <div className="projectContainer">
      <div className="textContainer">
        <h1>프로젝트</h1>
        <h3>Pet Tales <br/>반려견과 함께 여행계획을 만드는 페이지</h3>
      </div>    
      <img src={pettales} alt="펫 테일 이미지" className="pettalesPhoto"/>
    </div>
    <div>
        <hr className="separator" />
    </div>
    </>
  );
};

export default Page3;