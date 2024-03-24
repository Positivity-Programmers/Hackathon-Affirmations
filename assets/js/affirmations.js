const affirmations = [
    'I am capable of achieving great things.',
    'I am worthy of love and respect from myself and others.',
    'Today is full of possibilities and I will seize them.',
    'I trust myself to make the right decisions.',
    'My challenges help me grow and become stronger.',
    'I am a magnet for success and good opportunities.',
    'I choose to focus on the positive.',
    'I am grateful for the abundance in my life.',
    'I am loved, supported, and valued.',
    'Every day, in every way, I am getting better and better.',
    'I radiate confidence, positivity, and grace.',
    'My potential is limitless.',
    'I embrace my unique qualities and strengths.',
    'I am resilient, strong, and brave.',
    'Happiness flows from me to others and back again.',
    'I am focused on my goals and feel passionate about my work.',
    'I release doubt and welcome faith.',
    'I am at peace with my past and excited about the future.',
    'I choose to be kind to myself and love myself unconditionally.',
    'I am surrounded by people who push me to be my best self.',
    'I have the power to create change.',
    'My mind is clear of self-doubt, and I am ready to embrace every challenge.',
    'I am worthy of my dreams.',
    'I am enough just as I am.',
    'My life is filled with joy and abundance.',
    'I am a beacon of love and compassion.',
    'I possess the qualities needed to be extremely successful.',
    'Creative energy surges through me and leads me to new and brilliant ideas.',
    'Happiness is a choice, and today I choose to be happy.',
    'I am proud of myself and all that I have accomplished.',
    'I give myself permission to do what is right for me.',
    'I am learning to trust the journey.',
    'My mind is filled with healthy, positive, and loving thoughts.',
    'My life is a gift and I appreciate everything I have.',
    'I allow myself to be who I am without judgment.',
    'I listen to my intuition and trust my inner guide.',
    'I accept my emotions and let them serve their purpose.',
    'I am devoted to my soul’s purpose and passion.',
    'I am grateful for the wealth of health, love, and joy I have today.',
    'I am a powerhouse; I am indestructible.',
    'Through the power of my thoughts and words, incredible transformations are happening.',
    'As I take on new challenges, I feel calm, confident, and powerful.',
    'I will be present in all moments.',
    'I am constantly evolving into a better version of myself.',
    'I am free of worry and regret.',
    'My life is full of amazing opportunities that are ready for me to step into.',
    'I am adventurous. I overcome fears by following my dreams.',
    'I feed my spirit. I train my body. I focus my mind. It’s my time.',
    'I am in charge of my life and no one will dictate my path besides me.',
    'I am a unique, special, and valuable person, and I deserve to feel good about myself.',

];

function generateRandomAffirm() {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
    // const affirmationsList = document.getElementById('affirm-list');
    // affirmationsList.innerHTML = '';

    // for (let i = 0; i < 1; i++) {
    //     const randomIndex = Math.floor(Math.random() * affirmations.length);
    //     const affirmation = affirmations[randomIndex];

    //     const listItem = document.createElement('li');
    //     listItem.textContent = affirmation;
    //     affirmationsList.appendChild(listItem);
    // }
}

function generateAffirm() {
    document.getElementById('affirm1').textContent = generateRandomAffirm();
    document.getElementById('affirm2').textContent = generateRandomAffirm();
    document.getElementById('affirm3').textContent = generateRandomAffirm();
  }

document.getElementById('generate-btn').addEventListener('click', generateAffirm);

export { affirmations }