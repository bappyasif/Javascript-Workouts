function scrollAppear() {
    let intro_text = document.querySelector(".intro-text");
    let intro_position = intro_text.getBoundingClientRect().top;
    console.log(intro_position);
    let screen_position = window.innerHeight / 2;
    //let screen_position = window.innerHeight;

    if(intro_position < screen_position) {
        intro_text.classList.add("intro-appear");
    }
}

//scrollAppear();
window.addEventListener("scroll", scrollAppear);