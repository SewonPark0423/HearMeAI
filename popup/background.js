// 현재 기능에서는 background.js는 최소화 상태
// 추후 탭 오디오 필터 적용 등 고급 기능 추가 가능

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("백그라운드에서 받은 메시지:", message);
});
