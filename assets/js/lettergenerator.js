
"use strict";
document.getElementById("generateEmail").addEventListener("click", function () {
  const recipientEmail = document.getElementById("recipientEmail").value;
  const messageCategory = document
    .getElementById("messageCategory")
    .value.toLowerCase(); // Added toLowerCase() to match the case in generateMessage function
  const senderName = document.getElementById("senderName").value;
  const subject = "A Special Message For You";
  const message = generateMessage(messageCategory, senderName);

  // Check if any of the fields are empty
  if (!recipientEmail || !messageCategory || !senderName) {
    return; // Exit the function if any field is empty
  }

  // Open default mail client
  window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;
});

function generateMessage(category, senderName) {
  const messages = {
    motivation: [
      "Remember, you can do anything you set your mind to.",
      "Believe in yourself and all that you are.",
      "Push yourself, because no one else is going to do it for you.",
      "You don't have to be great to start, but you have to start to be great.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Difficult roads often lead to beautiful destinations.",
    ],
    gratitude: [
      "Thank you for being such a great friend.",
      "I'm so grateful to have you in my life.",
      "Your kindness and generosity warm my heart.",
      "It's a blessing to have someone as supportive as you in my corner.",
      "Thank you for always being there for me, through thick and thin.",
      "Your presence in my life is a constant source of joy and comfort.",
    ],
    inspiration: [
      "Every moment is a fresh beginning.",
      "Dream big and dare to fail.",
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
      "Life is about making an impact, not making an income.",
      "The only way to do great work is to love what you do.",
    ],
  };

  const categoryMessages = messages[category];
  const randomIndex = Math.floor(Math.random() * categoryMessages.length);
  return `${categoryMessages[randomIndex]} - ${senderName}`;
}
