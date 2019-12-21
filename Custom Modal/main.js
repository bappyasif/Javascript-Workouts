// Get Modal Element Access
var modal = document.getElementById("simpleModal");
// Get Open Modal button
var modalBtn = document.getElementById("modalBtn");
// Get Close Button Access
var closeBtn = document.getElementById("closeBtn");

// Lsiten For Click Event 
modalBtn.addEventListener("click", openModal);

// Function To Open Modal
function openModal() {
    modal.style.display = "block";
}