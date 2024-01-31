import React from 'react';
import './1page.css';
import resumePhoto from './resumePhoto.jpg';

const Page1 = () => {
  return (
    <div className="aboutMeContainer">
      <img src={resumePhoto} alt="이력서 이미지" className="resumePhoto" />
      <div className='v-line'/>
      <div className="textContainer">
        <h1>파고드는 사람</h1>
        <h3>이름 : 홍성혁</h3>
        <h3>나이 : 1999.02</h3>
        <h3>거주지 : 산본</h3>
        <h3>이메일 : login7h@gmail.com</h3>
      </div>
    </div>
  );
};

export default Page1;