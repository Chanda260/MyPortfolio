// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});
