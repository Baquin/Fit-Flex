class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animeteLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s');
        });
    }
    handleClick() {
        this.navList.calssList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    Init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list li",
    ".nav-list li",
);
mobileNavbar.Init();