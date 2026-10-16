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

// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
	const openButtons = document.querySelectorAll("[data-modal-open]");
	let activeModal = null;

	const openModal = (modal) => {
		modal.classList.add("is-open");
		document.body.style.overflow = "hidden";

		modal.querySelector(".modal")?.focus();
		activeModal = modal;
	};

	const closeModal = (modal) => {
		modal.classList.remove("is-open");
		document.body.style.overflow = "";

		if (activeModal === modal) {
			activeModal = null;
		}
	};

	openButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const modal = document.querySelector(button.dataset.modalOpen);

			if (modal) {
				openModal(modal);
			}
		});
	});

	document.querySelectorAll(".modal-overlay").forEach((modal) => {
		// Close button
		modal.querySelector(".modal-close")?.addEventListener("click", () => {
			closeModal(modal);
		});

		// Click backdrop
		modal.addEventListener("click", (event) => {
			if (event.target === modal) {
				closeModal(modal);
			}
		});
	});

	// ESC key
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && activeModal) {
			closeModal(activeModal);
		}
	});
});
