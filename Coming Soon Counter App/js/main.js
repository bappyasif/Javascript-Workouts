const countdown_counter = document.querySelector(".countdown");

// Setting Countdwon Launch Date
const launch_date = new Date("Jan 14, 2020 13:00:00").getTime();
//console.log(launch_date);

// Update Interval Every Second
const interval_timer = setInterval(() => {
    //console.log("Hello World");

    //Get Todays Date And Time In Milis
    const date_now = new Date().getTime();

    // Distance From Now To Launch Date
    const countdown_distance = launch_date - date_now;
    //console.log(countdown_distance);

    // Time Calculations
    const days = Math.floor(countdown_distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((countdown_distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown_distance % (1000 * 60)) / 1000);

    // Displaying Countdown
    countdown_counter.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Mins</span></div>
        <div>${seconds}<span>Seconds</span></div>

    `;

    // Checking Launch Date Upcoming
    if( countdown_distance < 0 ) {
        // Stop Countdown
        clearInterval(interval_timer);
        // Style And Output Text
        countdown_counter.style.color = "#17a2b8";
        countdown_counter.innerHTML = "Launched Already ! ! ! ";
    }

}, 2000);