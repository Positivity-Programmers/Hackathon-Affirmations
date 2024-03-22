const affirmations = [
    'I am the best',
    'I am happy',
    'I am loving life',
]

const affirmBtn = document.getElementById('affirm-btn')
const displayAffirm = document.getElementById('display-affirm')

function generateRandomAffirm() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    displayAffirm.innerHTML = `<h1> ${randomAffirmation}</h1>`;
    
}
affirmBtn.addEventListener('click', generateRandomAffirm)

