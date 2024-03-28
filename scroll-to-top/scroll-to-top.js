const buttonScrollToTop = document.querySelector(".scroll-to-top");
document.addEventListener("scroll", function() {
    if (window.scrollY > (window.innerHeight / 2)) {
        buttonScrollToTop.style.visibility = "visible";
    }
    else {
        buttonScrollToTop.style.visibility = "hidden";
    };
});
buttonScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});