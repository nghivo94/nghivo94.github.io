function reveal() {
    const reveals = document.querySelectorAll(".hidden");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementBottom = reveals[i].getBoundingClientRect().bottom;
        const elementVisible = 150;
        if ((elementTop < windowHeight - elementVisible) && (elementBottom > elementVisible)) {
          reveals[i].classList.add("reveal");
        } else {
          reveals[i].classList.remove("reveal");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();