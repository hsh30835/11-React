// 메인화면 왼쪽에 보스 ui 이미지 오른쪽에 이름, 레벨, 포스, 체력, 데카, 시간
import 카링 from './카링.webp'
import './Main.css';

const Main = () => {
    return(
        <div className='kalingMainpage'>
            <img src={카링} alt="카링" className="kaling"/>
            <h3>이름 : 카링 <br/>
                난이도 : 이지 <br/>
                레벨 : 275 <br/>
                포스 : 230 <br/>
                체력 : 921조 <br/>
                정신력 : 1000 <br/>
                시간 : 30분 <br/>
            </h3>
        </div>
    )
}

export default Main;