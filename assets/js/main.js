(() => {

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const iconMenu = document.getElementById("iconMenu");
    const iconClose = document.getElementById("iconClose");

    menuToggle.addEventListener("click", () => { 
    const isHidden = mobileMenu.classList.toggle("hidden"); 
    iconMenu.classList.toggle("hidden", !isHidden);
    iconClose.classList.toggle("hidden", isHidden); 
    });
    mobileMenu.querySelectorAll("a").forEach((link) => { 
    link.addEventListener("click", () => { 
        mobileMenu.classList.add("hidden"); 
        iconMenu.classList.remove("hidden"); 
        iconClose.classList.add("hidden");
    });
    });
    AOS.init({
        delay: 200,
        duration: 600,
        offset: 60,
        once: false,
        mirror: true,
        startEvent: 'DOMContentLoaded',
        disable: () => window.matchMedia("(prefers-reduced-motion:reduce)").matches 
    });
})();