let currentRate = 1.0;
let currentPitch = 1.0;

// 슬라이더 업데이트
document.getElementById('rateSlider').addEventListener('input', (e) => {
    currentRate = parseFloat(e.target.value);
    document.getElementById('rateVal').innerText = currentRate.toFixed(1);
});

document.getElementById('pitchSlider').addEventListener('input', (e) => {
    currentPitch = parseFloat(e.target.value);
    document.getElementById('pitchVal').innerText = currentPitch.toFixed(1);
});

// 텍스트 읽기
document.getElementById('speakBtn').addEventListener('click', () => {
    let text = document.getElementById('textInput').value.trim();
    if (!text) {
        alert("텍스트를 입력해주세요!");
        return;
    }
    let utter = new SpeechSynthesisUtterance(text);
    utter.rate = currentRate;
    utter.pitch = currentPitch;
    speechSynthesis.speak(utter);
});

// 피드백 반영
document.getElementById('applyFeedbackBtn').addEventListener('click', () => {
    let feedback = document.getElementById('feedbackInput').value;

    if (feedback.includes("빠")) currentRate = Math.max(currentRate * 0.8, 0.5);
    if (feedback.includes("느")) currentRate = Math.min(currentRate * 1.2, 2);
    if (feedback.includes("높")) currentPitch = Math.min(currentPitch * 1.5, 2);
    if (feedback.includes("낮")) currentPitch = Math.max(currentPitch * 0.7, 0);

    document.getElementById('rateSlider').value = currentRate;
    document.getElementById('rateVal').innerText = currentRate.toFixed(1);

    document.getElementById('pitchSlider').value = currentPitch;
    document.getElementById('pitchVal').innerText = currentPitch.toFixed(1);

    alert("피드백이 반영되었습니다!");
});

// 오디오 파일 재생
document.getElementById('playAudioBtn').addEventListener('click', () => {
    const fileInput = document.getElementById('audioFile');
    if (!fileInput.files[0]) {
        alert("오디오 파일을 선택해주세요!");
        return;
    }
    const audio = new Audio(URL.createObjectURL(fileInput.files[0]));
    audio.playbackRate = currentRate;
    audio.preservesPitch = false;
    audio.play();
});
