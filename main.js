const navigationIcon = document.querySelector(".navigation-icon");
const wrapper = document.querySelector(".wrapper");
const crossIcon = document.querySelector(".cross-icon");
const menuArea = document.querySelector(".menu-area");

navigationIcon.addEventListener("click", ()=> {
    wrapper.classList.add("show");

    setTimeout(() => {
        menuArea.classList.add("active");
    }, 10);
});

crossIcon.addEventListener("click", ()=> {
    wrapper.classList.remove("show");
    menuArea.classList.remove("active");
});