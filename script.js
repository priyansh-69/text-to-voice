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

  // Log the text value after user input for debugging
  console.log("Text to speak:", text);

  // Handle utterance speaking and ending events
  utterance.onstart = () => {
    speakEL.disabled = true;
    stopEL.disabled = false;
  };
  utterance.onend = () => {
    speakEL.disabled = false;
    stopEL.disabled = true;
  };

  // Check for available voices before speaking
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    console.error("No speech synthesis voices available.");
    alert("No voices available for text-to-speech.");
    return;
  }

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
}

function stopText() {
  window.speechSynthesis.cancel();
}

// Check for voices availability outside the speakText function
// to avoid multiple checks and potential errors
window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    console.error("No speech synthesis voices available.");
    alert("No voices available for text-to-speech.");
    return;
  }
  speakEL.disabled = false; // Enable the speak button if voices are found
};

// Update stop button state on load
stopText(); // Initially disable stop button
