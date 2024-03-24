import { affirmations } from "./affirmations.js";


const affirmBtn = document.getElementById('affirm-btn')
const displayAffirm = document.getElementById('display-affirm')
let arrayList = []

function generateRandomAffirm() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    displayAffirm.innerHTML = `<p class="text-center p-5"> ${randomAffirmation}</p>`;
    
}
affirmBtn.addEventListener('click', generateRandomAffirm)
