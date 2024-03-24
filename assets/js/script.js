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