const app = document.getElementById("app");
const morseCodeArray = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];
let inputString = "";
let alphabetArray = "abcdefghijklmnopqrstuvwxyz æøå";
let translatedString = "";
let letterIndex = 0;

function updateView() {
    app.innerHTML = `
        <div class="container">
            <input type="text" onchange="translateInputString(this.value)">
            <div>${translatedString}</div>
        </div>
    `;
}

function translateInputString(string) {
    inputString = string.toLowerCase();
    for (letter of inputString) {
        letterIndex = alphabetArray.indexOf(letter);
        translatedString += morseCodeArray[letterIndex];
        
    }
    updateView();
    translatedString = "";
}