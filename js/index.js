const featuresButton = document.querySelector("#features-button");
const companyButton = document.querySelector("#company-button");
const mediaQuery = window.matchMedia("(min-width: 1440px)");

function expandMenu() {
    const arrowIcon = this.firstElementChild.nextElementSibling;
    arrowIcon.classList.toggle("nav-bar__dropdown-icon--active");
    
    const dropdownMenu = this.nextElementSibling;
    if (!mediaQuery.matches && dropdownMenu.classList.contains("dropdown-menu--hidden")) {
        dropdownMenu.style.height = `${dropdownMenu.scrollHeight}px`;
    } else {
        dropdownMenu.style.height = null;
    }

    dropdownMenu.classList.toggle("dropdown-menu--hidden");
}

featuresButton.addEventListener("click", expandMenu);
companyButton.addEventListener("click", expandMenu);


window.addEventListener("resize", () => {
    const featuresDropdownMenu = document.querySelector("#features-dropdown-menu");
    const companyDropdownMenu = document.querySelector("#company-dropdown-menu");
    
    if (!mediaQuery.matches && !featuresDropdownMenu.classList.contains("dropdown-menu--hidden")) {
        featuresDropdownMenu.style.height = `${featuresDropdownMenu.scrollHeight}px`;
    } else {
        featuresDropdownMenu.style.height = null;
    }
    
    if (!mediaQuery.matches && !companyDropdownMenu.classList.contains("dropdown-menu--hidden")) {
        companyDropdownMenu.style.height = `${companyDropdownMenu.scrollHeight}px`;
    } else {
        companyDropdownMenu.style.height = null;
    }
});

const header = document.querySelector(".header");
const hamburgerButton = document.querySelector(".nav-bar__hamburger-button");
const closeButton = document.querySelector(".nav-bar__close-button");
const navContainer = document.querySelector(".nav-container");
const transparentBackground = document.querySelector(".nav-container__transparent-background");

hamburgerButton.addEventListener("click", () => {
    navContainer.classList.remove("nav-container--hidden-mobile");
    transparentBackground.classList.remove("nav-container__transparent-background--hidden");
});

closeButton.addEventListener("click", () => {
    navContainer.classList.add("nav-container--hidden-mobile");
    transparentBackground.classList.add("nav-container__transparent-background--hidden");
})
