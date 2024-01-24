/*
    동기 작업과 비동기 작업
    동기 작업 : 하나의 작업 실행하고 마친 뒤에 작업을 순차적으로 실행함/(블럭킹)
    비동기 작업 : 메인 흐름은 멈추지 않는 상태에서 특정 작업들을 백그라운드에서 처리하며 동시에 처리하는 것 처럼 실행

    비동기 작업을 할 때 가장 맣ㄴ이 사용하는 방식이 콜백 함수를 이용하는 방식이다.
    선언적으로 콜백 함수를 만들고 간단한 비동기 흐름을 만들어 보자
*/

const sayHello = () => {
    console.log("안녕");
}

setTimeout(sayHello, 3000);
console.log("end");