document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.querySelector('.txt-dynamique');
    const texts = ["étudiant en R&T", "lutte blyaeth"];
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
    particlesJS('particles-js-1', {
        particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true },
            move: { speed: 1 }
        }
    });

    particlesJS('particles-js-2', {
        particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true },
            move: { speed: 1 }
        }
    });

    particlesJS('particles-js-3', {
        particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true },
            move: { speed: 1 }
        }
    });
});