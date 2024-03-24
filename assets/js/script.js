// Affirmations generator script
import { affirmations } from "./affirmations.js";


const affirmBtn = document.getElementById('affirm-btn')
const displayAffirm = document.getElementById('display-affirm')
let arrayList = []

function generateRandomAffirm() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    displayAffirm.innerHTML = `<p class="text-center p-5"> ${randomAffirmation}</p>`;
    
}
affirmBtn.addEventListener('click', generateRandomAffirm)

// Generates 3 random quotes

import { quotes } from "./quotes.js";
function generateRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function generateQuote() {
  document.getElementById('affirm1').textContent = generateRandomQuote();
  document.getElementById('affirm2').textContent = generateRandomQuote();
  document.getElementById('affirm3').textContent = generateRandomQuote();
}

document.getElementById('generate-btn').addEventListener('click', generateQuote);

// Google Translate Script
document.getElementById('loadTranslate').onclick = function() {
    var translateScript = document.createElement('script');
    translateScript.type = 'text/javascript';
    translateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(translateScript);

    // Initialize translation widget once the script is loaded
    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    // Hide the button after it's clicked
    this.style.display = 'none';
  };

  