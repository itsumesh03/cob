const menuButton1 = document.querySelector(".menu-dash-btn");
const overlayMenu1 = document.querySelector(".overlay-dash-menu");
const content1 = document.querySelector(".content");

menuButton1.addEventListener("click", () => {
    const currentLeft1 = parseInt(getComputedStyle(overlayMenu1).left, 10); // Use overlayMenu1 here
    if (currentLeft1 === -250) {
        overlayMenu1.style.left = "0";
        content1.style.marginLeft = "250px";
    } else {
        overlayMenu1.style.left = "-250px";
        content1.style.marginLeft = "0";
    }
});

function close_dash(){
    cons
}