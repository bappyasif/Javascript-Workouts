// Get Modal Element Access
var modal = document.getElementById("simpleModal");
// Get Open Modal button
var modalBtn = document.getElementById("modalBtn");
// Get Close Button Access
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Lsiten For Click Event 
modalBtn.addEventListener("click", openModal);
// Listen For Close Modal
closeBtn.addEventListener("click", closeModal);
// Listen For Outside Click
window.addEventListener("click", clickOutside);

// Function To Open Modal
function openModal() {
    modal.style.display = "block";
}

// Fucntion To Close Modal
function closeModal(){
    modal.style.display = "none";
}

// Fucntion To Close Modal When Clicked Outside Of Modal Box Area.
function clickOutside(event){
    if(event.target == modal) {
        modal.style.display ="none";
    }
}