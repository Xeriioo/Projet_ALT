document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.querySelector('.dynamic-text');
    const texts = ["étudiant en R&T", "Passionné de technologie"];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            dynamicText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                dynamicText.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeText();
            }, 5000);
        }
    }

    typeText();
});