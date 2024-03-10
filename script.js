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






// const textEL = document.getElementById('text');
// const speakEL = document.getElementById('speak');
// const stopEL = document.getElementById('stop');
// const langEL = document.getElementById('lang');
// const speedEL = document.getElementById('speed');
// const pitchEL = document.getElementById('pitch');
// const volumeEL = document.getElementById('volume');

// // add event listeners to the buttons
// speakEL.addEventListener('click', speakText);
// stopEL.addEventListener('click', stopText);

// // define the speakText function
// function speakText() {

//     // stop any speaking in progress
//     window.speechSynthesis.cancel();

//     // get the text and the options from the input elements
//     const text = textEL.value;
//     const lang = langEL.value;
//     const speed = speedEL.value;
//     const pitch = pitchEL.value;
//     const volume = volumeEL.value;

//     // create a new speech synthesis utterance with the text and the options
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = lang;
//     utterance.rate = speed;
//     utterance.pitch = pitch;
//     utterance.volume = volume;

//     // speak the utterance
//     window.speechSynthesis.speak(utterance);
// }

// define the stopText function
// function stopText() {

//     // stop any speaking in progress
//     window.speechSynthesis.cancel();
// }




const textEL = document.getElementById('text');
const speakEL = document.getElementById('speak');
const stopEL = document.getElementById('stop');
const langEL = document.getElementById('lang');
const speedEL = document.getElementById('speed');
const pitchEL = document.getElementById('pitch');
const volumeEL = document.getElementById('volume');

function speakText() {
  // Stop any speaking in progress
  window.speechSynthesis.cancel();

  // Get the text and options from the input elements
  const text = textEL.value;
  if (!text) {
    alert("Please enter text to speak.");
    return;
  }
  const lang = langEL.value;
  const speed = parseFloat(speedEL.value); // Ensure speed is a number for SpeechSynthesis
  const pitch = parseFloat(pitchEL.value); // Ensure pitch is a number for SpeechSynthesis
  const volume = parseFloat(volumeEL.value); // Ensure volume is a number for SpeechSynthesis

  // Create a new speech synthesis utterance with the text and options
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = speed; // SpeechSynthesis uses rate for speed
  utterance.pitch = pitch;
  utterance.volume = volume;

  // Handle utterance speaking and ending events
  utterance.onstart = () => {
    speakEL.disabled = true;
    stopEL.disabled = false;
  };
  utterance.onend = () => {
    speakEL.disabled = false;
    stopEL.disabled = true;
  };

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
}

function stopText() {
  window.speechSynthesis.cancel();
}

// Enable speaking only when synthesis is ready
window.speechSynthesis.onvoiceschanged = () => {
  speakEL.disabled = !window.speechSynthesis.getVoices().length;
};

// Update stop button state on load
stopText(); // Initially disable stop button

