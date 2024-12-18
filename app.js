
// let speech  = new SpeechSynthesisUtterance();

// let voice = []

// let voiceSelect = document.querySelector("select")
// window.speechSynthesis.onvoiceschanged = () => {
//     voice = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
// }



// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);

// });

// let speech = new SpeechSynthesisUtterance();
// let voices = []; // Renamed this to "voices" for clarity and consistency

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0]; // Default voice set to the first available

//     voices.forEach((voice, i) => {
//         voiceSelect.options[i] = new Option(voice.name, i);
//     });
// };

// voiceSelect.addEventListener("change", () =>{
//     speech.voice = voices[voiceSelect.value]
// })

// // Update the speech voice when a new option is selected
// voiceSelect.addEventListener("change", () => {
//     speech.voice = voices[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });


let speech = new SpeechSynthesisUtterance();
let voices = []; // Array to store voices

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set the default voice to the first available

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Update the speech voice when a new option is selected
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
