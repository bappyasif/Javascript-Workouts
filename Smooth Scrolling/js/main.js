function smoothScroll(target, duration) {
    var target_element = document.querySelector(target);
    console.log(target_element);

    var target_position = target_element.getBoundingClientRect().top;
    console.log(target_position);

    var starting_position = window.pageYOffset || window.scrollY;
    console.log(starting_position);

    var scroll_distancce = target_position - starting_position;
    console.log(scroll_distancce);

    var start_time = null;
    
    function aniumationTimee(currentTime) {
        if(start_time === null) {
            start_time = currentTime;
            console.log(start_time);
        }

        var time_elapsed = currentTime - start_time;
        console.log(time_elapsed);

        var run_animation = ease(time_elapsed, starting_position, scroll_distancce, duration);
        window.scrollTo(0, run_animation);

        if(time_elapsed < duration) {
            requestAnimationFrame(aniumationTimee);
            console.log("Time Elapsed : "+time_elapsed + " Duration : " +duration);
        }
    

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

      //requestAnimationFrame(loop);
      requestAnimationFrame(aniumationTimee);
    }
    
    //requestAnimationFrame(aniumationTimee);
}

// smoothScroll(".section-one", 2000);
// smoothScroll(".section-two", 2000);

var section_one = document.querySelector(".section-one");
section_one.addEventListener("click", function() {
    smoothScroll(".section-two", 1000);
});

var section_two = document.querySelector(".section-two");
section_two.addEventListener("click", function() {
    smoothScroll(".section-one", 1000);
});

