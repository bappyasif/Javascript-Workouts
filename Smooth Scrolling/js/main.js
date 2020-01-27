function smoothScroll(target, duration) {
    var target_element = document.querySelector(target);
    console.log(target_element);

    var target_position = target_element.getBoundingClientRect().top;
    console.log(target_position);

    var starting_position = window.pageYOffset;
    console.log(starting_position);

    var scroll_distancce = target_position -starting_position;
    console.log(scroll_distancce);

    var start_time = null;
    function aniumationTimee(currentTime) {
        if(start_time === null) {
            start_time = currentTime;
            console.log(start_time);
        }
    }
    
    requestAnimationFrame(aniumationTimee);

}

smoothScroll(".section-one", 2000);

