console.log("Stop Watch");

// DOM Traversal

const startTimer = document.querySelector(".start-time");
//const startTimer = document.getElementById("start");
//console.log(startTimer);
const endTimer = document.querySelector(".time-stop");
//const endTimer = document.getElementById("stop");

const timeDuration = document.querySelector(".duration");

const resetWatch = document.getElementById("reset");

//console.log(endTimer);

// Create Stop Watch Object
const stopWatch = new StopWatch();

// stopWatch.start();
// stopWatch.stop();
// console.log(stopWatch.runDuration);
// //stopWatch.stop();
// stopWatch.start();
// //stopWatch.reset();
// stopWatch.stop();
// console.log(stopWatch.runDuration);

// stopWatch.reset();
// console.log(stopWatch.runDuration);

// stopWatch.start();

// console.log(stopWatch.duration());

// stopWatch.stop();

// stopWatch.start();

// stopWatch.stop();

// console.log(stopWatch.duration());

// stopWatch.reset();

// console.log(stopWatch.duration());

function StopWatch() {
  let startTime,
    endTime,
    runningState,
    runDuration = 0;

  this.start = function() {
    if (runningState) {
      throw new Error("Already Running");
    }
    startTime = new Date();
    //startTime = new Date("Thu Feb 06 2020 19:30:54");
    // startedTimer = new Date().getTime();
    // console.log(startedTimer);
    runningState = true;

    //startTimer.innerText = startedTimer;
    //startTimer.innerHTML = startTime;
    startTimer.innerHTML = `
        <div><span>Start Time</span></br>${startTime}</div>
    `;
  };

  this.stop = function() {
    if (!runningState) {
      throw new Error("Not Running");
    }
    endTime = new Date();
    //endTime = new Date("Thu Feb 06 2020 19:30:54");
    //endedTimer = endTime.getTime();
    //console.log(endTimer);
    runningState = false;

    endTimer.innerHTML = `
    <div><span>End Timed</span></br>${endTime}</div>
    `;

    const secondsElapsed = endTime.getTime() - startTime.getTime() / 1000;
    runDuration += secondsElapsed;

    //console.log(runDuration);
    timeDuration.innerHTML = `
        <div><span>Time Elapsed : </span>${runDuration /
          (23 * 60 * 60 * 1000 * 1000)}</div>
    `;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    runningState = false;
    runDuration = 0;
  };

  Object.defineProperty(this, "runDuration", {
    get: function() {
      //runDuration = this.start - this.stop / 1000;
      return runDuration;
    }
  });
}

stopWatch.start();
stopWatch.stop();
console.log(stopWatch.runDuration);
