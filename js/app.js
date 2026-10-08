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
});