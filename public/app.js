// Scroll Reveal Logic
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// CA Copier Logic
const copyBtn = document.getElementById('copy-btn');
const caText = document.getElementById('ca-text');
const copySuccess = document.getElementById('copy-success');

if (copyBtn && caText) {
    copyBtn.addEventListener('click', () => {
        const textToCopy = caText.innerText;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Show success tooltip
            copySuccess.classList.remove('hidden');
            copyBtn.innerText = 'COPIED!';
            copyBtn.style.backgroundColor = '#FF4D4D';

            setTimeout(() => {
                copySuccess.classList.add('hidden');
                copyBtn.innerText = 'COPY';
                copyBtn.style.backgroundColor = '#121212';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
}

// Interactivity for Registry Items
const items = document.querySelectorAll('.registry-item');
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomRotation = Math.floor(Math.random() * 20) - 10;
        item.style.transform = `scale(1.1) rotate(${randomRotation}deg)`;
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = `scale(1) rotate(0deg)`;
    });
});

console.log('DDOGE Light Theme Initialized! Woof!');
