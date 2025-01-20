
window.onload = function () {
    // ----------- 요소 선택 ------------------------------
    // id 속성: color-box
    let cBox = document.getElementById("color-box");
    // id 속성: color-input
    let cInput = document.getElementById("color-input");
    let applyButton = document.getElementById("apply-button");   // id 속성: apply-button
    // id 속성: message
    let message = document.getElementById("message");

    // 버튼 클릭 이벤트 핸들러
    applyButton.onclick = function () {
        // 선택된 색상 값 조회(가져오기)
        let color = cInput.value;
        // #color-box 요소의 스타일 중 배경색 변경
        cBox.style.backgroundColor = color;
        // #message 요소에 변경된 배경색 정보로 출력
        message.innerText = "현재 배경색은 " + cInput.value + " 입니다.";
    };
}