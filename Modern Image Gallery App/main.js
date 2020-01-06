const currentImage = document.querySelector("#current");
const allImages = document.querySelectorAll(".imgs img");

const opacity = 0.6;

// Setting First Image Opacity
allImages[0].style.opacity = opacity;

//const [currentImage, allImages] = [document.querySelector("#current"), document.querySelectorAll(".imgs img")];

// allImages.forEach(img => 
//     img.addEventListener("click", event => (currentImage.src = event.target.src))
// );

allImages.forEach(image => image.addEventListener("click", imageClicked));

function imageClicked(event) {
    // Reset Image Opacity Attribute
    allImages.forEach(image => (image.style.opacity = 1));

    // Change Current Image To Source Of Clicked Image
    currentImage.src = event.target.src;

    // Add Fade In Animation
    currentImage.classList.add("fade-in");

    // Remove Fade In Class After .5 Seconds
    setTimeout(() => currentImage.classList.remove("fade-in"), 500);

    // Change Imahge Opacity Attribute
    event.target.style.opacity = opacity;
}
