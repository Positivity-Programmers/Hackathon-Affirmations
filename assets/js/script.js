import { affirmations } from "./affirmations.js";



const affirmBtn = document.getElementById('affirm-btn')
const displayAffirm = document.getElementById('display-affirm')
let arrayList = []

function generateRandomAffirm() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    displayAffirm.innerHTML = `<p class="text-center p-5"> ${randomAffirmation}</p>`;
    
    /**for (let i = 0; i < affirmations.length; i++) {
        if (randomAffirmation === affirmations[i]) {
            affirmations.splice(i, 1);
          setTimeout(() => {
              
          }, 2000);
          console.log(true);
        } else {
            displayAffirm.innerHTML = `<p class="text-center p-5"> ${randomAffirmation}</p>`;
        }
    }
    **/
    
}
affirmBtn.addEventListener('click', generateRandomAffirm)
