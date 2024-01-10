const menuButton = document.querySelector(".menu-btn");
const overlayMenu = document.querySelector(".overlay-menu");
const content = document.querySelector(".content");

menuButton.addEventListener("click", () => {
    const currentLeft = parseInt(getComputedStyle(overlayMenu).left, 10);
    if (currentLeft === -250) {
        overlayMenu.style.left = "0";
        content.style.marginLeft = "250px";
    } else {
        overlayMenu.style.left = "-250px";
        content.style.marginLeft = "0";
    }
});