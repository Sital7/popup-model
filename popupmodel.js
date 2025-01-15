 // Wait for the DOM to load before running the script
 document.addEventListener("DOMContentLoaded", () => {
    const popupNode = document.querySelector("#popup");
    const overlay = popupNode.querySelector(".overlay");
    const closeBtn = popupNode.querySelector(".close-btn");
    const openBtn = document.querySelector("#open-popup");

    // Open the popup
    function openPopup() {
        popupNode.classList.add("active");
    }

    // Close the popup
    function closePopup() {
        popupNode.classList.remove("active");
    }

    // Attach event listeners
    openBtn.addEventListener("click", openPopup);
    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
});