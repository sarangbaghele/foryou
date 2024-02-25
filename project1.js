const compliments = [
    "You're like a fine wine, you get better with time!",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "You must be a parking ticket because you've got 'FINE' written all over you!",
    "Is your name Google? Because you've got everything I've been searching for!"
];

function generateCompliment() {
    const complimentElement = document.getElementById('compliment');
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentElement.textContent = compliments[randomIndex];
    complimentElement.classList.remove('animated');
    void complimentElement.offsetWidth; // Trigger reflow to restart the animation
    complimentElement.classList.add('animated');
}
