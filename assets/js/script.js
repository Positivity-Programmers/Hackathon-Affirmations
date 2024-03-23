import { affirmations } from "./affirmations.js";



const affirmBtn = document.getElementById('affirm-btn')
const displayAffirm = document.getElementById('display-affirm')

function generateRandomAffirm() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    displayAffirm.innerHTML = `<h1> ${randomAffirmation}</h1>`;
    
}
affirmBtn.addEventListener('click', generateRandomAffirm)

