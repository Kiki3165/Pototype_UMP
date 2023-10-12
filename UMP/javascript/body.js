// body-style.js
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
        section.style.opacity = 0;
    });

    function fadeIn(element, duration) {
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / duration;
            element.style.opacity = Math.min(progress, 1);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    sections.forEach(function (section) {
        fadeIn(section, 1000); // Durée du fondu en millisecondes (1 seconde dans cet exemple)
    });
});