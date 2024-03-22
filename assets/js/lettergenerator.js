document.getElementById("generateEmail").addEventListener("click", function() {
    const recipientEmail = document.getElementById("recipientEmail").value;
    const messageCategory = document.getElementById("messageCategory").value.toLowerCase(); // Added toLowerCase() to match the case in generateMessage function
    const senderName = document.getElementById("senderName").value;
    const subject = "A Special Message For You";
    const message = generateMessage(messageCategory, senderName);

    // Open default mail client
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

function generateMessage(category, senderName) {
    const messages = {
        motivation: [
            "Remember, you can do anything you set your mind to.",
            "Believe in yourself and all that you are."
        ],
        gratitude: [
            "Thank you for being such a great friend.",
            "I'm so grateful to have you in my life."
        ],
        inspiration: [
            "Every moment is a fresh beginning.",
            "Dream big and dare to fail."
        ]
    };

    const categoryMessages = messages[category];
    const randomIndex = Math.floor(Math.random() * categoryMessages.length);
    return `${categoryMessages[randomIndex]} - ${senderName}`;
}
