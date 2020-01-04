let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

// Clear All Existing Images
function resetImages() {
    for(let src = 0; src < sliderImages.length; src++) {
        sliderImages[src].style.display = "none";
    }
}

// Initialize Slider
function startSlideshow() {
    resetImages();
    sliderImages[0].style.display = "block";
}

// Show Previous
function slideLeft() {
    resetImages();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show Next
function slideRight() {
    resetImages();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// left Arrow Click EventListener
arrowLeft.addEventListener("click", function() {
    if(current===0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// left Arrow Click EventListener
arrowRight.addEventListener("click", function() {
    if(current===sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlideshow();