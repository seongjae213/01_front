// test라는 이름의 함수 정의
function test() {
    // 실행할 소스 코드
    window.alert('너 누구야!');
}


//모든 요소가 브라우저에 표시가 되었을 때
window.onload = function () {
    // id속성이 btn2인 요소 선택해서 변수에 저장
    let btn2 = document.getElementById('btn2');

    // 선택된 요소의 onclick 속성에 실행할 함수 정의

    btn2.onclick = function () {
        console.log('콘솔저장!');
    }
}

