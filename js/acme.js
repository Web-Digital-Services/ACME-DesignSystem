//This is the default file for any js

//May split if required

// Stop YouTube video when video bleed modal closes
function stopVideoFill(modal) {
    const iframe = modal.querySelector("iframe");

    if (iframe) {
        iframe.src = iframe.src;
    }
}

document.addEventListener("click", function (event) {
    const closeButton = event.target.closest(".video-fill-close");

    if (!closeButton) return;

    const modal = closeButton.closest(".video-fill-modal");

    if (modal) {
        stopVideoFill(modal);
    }
});

window.addEventListener("hashchange", function () {
    document.querySelectorAll(".video-fill-modal:not(:target)").forEach(function (modal) {
        stopVideoFill(modal);
    });
});;/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) On click, find the nav dropdown trigger parent
 * 3) If the nav dropdown trigger parent already has active class, remove it.
 * 4) If the nav dropdown trigger parent does not have an active class, add it.
 */

const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".menu-mobile");
try {
    menuIcon.addEventListener("click", () => {
        console.log("Icon clicked!");
        if (mobileMenu.classList.contains("display")) {
            menuIcon.classList.remove("display");
            mobileMenu.classList.remove("display");
        } else {
            menuIcon.classList.add("display");
            mobileMenu.classList.add("display");
        }
    });
} catch (e) {
    console.log("No menu Icon");
}

//*Subnav

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdowns = document.getElementsByClassName("subdrop");
var i;

for (i = 0; i < dropdowns.length; i++) {
    console.log(i);
    dropdowns[i].addEventListener("click", function () {
        console.log("Dropdown clicked!");
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            this.classList.add("active");
        }
    });
}
