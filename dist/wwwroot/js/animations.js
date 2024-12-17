
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const typedElement = document.getElementById("typed-text");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                new Typed(typedElement, {
                    strings: [
                        "Your Gateway to <br> Mental Utopia."
                    ],
                    typeSpeed: 50,
                    startDelay: 500,
                    loop: false,
                    showCursor: true,
                    cursorChar: "|",
                    onComplete: (self) => {
                        document.querySelector('.typed-cursor').style.display = 'none';
                    }
                });

                // Unobserve once it's activated
                observer.unobserve(typedElement);
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(typedElement);
});

window.onload = () => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
};
