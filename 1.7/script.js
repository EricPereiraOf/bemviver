// Animação de scroll (aparece conforme desce a página)
const elements = document.querySelectorAll('.card-animate, .fade-in');

function revealOnScroll() {
    for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.style.animationPlayState = "running";
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
