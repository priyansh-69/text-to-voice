var speechBox = document.getElementById('speech-box'),
    logoIcon = document.getElementById('logo-icon');

logoIcon.onclick = function () {
    speechBox.classList.toggle('active');
}

function speakFunction(text, onend) {
    window.speechSynthesis.cancel();
    var ssu = new SpeechSynthesisUtterance(text);
    ssu.lang = 'en-US';
    window.speechSynthesis.speak(ssu);
    function _wait() {
        if (!window.speechSynthesis.speaking) {
            onend();
            return;
        }
        window.setTimeout(_wait, 200);
    }
    _wait();
}

function speak() {
    if(text.value == "") {
        speakFunction("The text box is empty. Please type a text for me to speak.")
    } else {
        speakFunction(text.value);
    }
}
