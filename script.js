// const textEL = document.getElementById('text');
// const speakEL = document.getElementById('speak');

// speakEL.addEventListener('click', speakText);
// function speakText() {

//     // stop any speaking in progress
//     window.speechSynthesis.cancel();

//     const text = textEL.value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
// }
// get the elements from the HTML file
const textEL = document.getElementById('text');
const speakEL = document.getElementById('speak');
const stopEL = document.getElementById('stop');
const langEL = document.getElementById('lang');
const speedEL = document.getElementById('speed');
const pitchEL = document.getElementById('pitch');
const volumeEL = document.getElementById('volume');

// add event listeners to the buttons
speakEL.addEventListener('click', speakText);
stopEL.addEventListener('click', stopText);

// define the speakText function
function speakText() {

    // stop any speaking in progress
    window.speechSynthesis.cancel();

    // get the text and the options from the input elements
    const text = textEL.value;
    const lang = langEL.value;
    const speed = speedEL.value;
    const pitch = pitchEL.value;
    const volume = volumeEL.value;

    // create a new speech synthesis utterance with the text and the options
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speed;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // speak the utterance
    window.speechSynthesis.speak(utterance);
}

// define the stopText function
function stopText() {

    // stop any speaking in progress
    window.speechSynthesis.cancel();
}
