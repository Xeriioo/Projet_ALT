document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.querySelector('.txt-dynamique');
    const texts = ["étudiant en R&T", "lutte blyat"];
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


document.addEventListener('DOMContentLoaded', function () {

    const boxes = document.querySelectorAll('.box');

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkBoxes);
    checkBoxes(); // Initial check

});