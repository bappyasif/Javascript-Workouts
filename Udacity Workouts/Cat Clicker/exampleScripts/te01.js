// clear the screen for testing
document.body.innerHTML = "";
document.body.style.background = "white";
// var elem = document.createElement("div");
var nums = [1, 2, 3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {
  // This variable keeps changing every time we iterate!
  //  It's first value is 1, then 2, then finally 3.

  // This is the number we're on...
  var num = nums[i];

  // We're creating a DOM element for the number
  var elem = document.createElement("div");
  elem.textContent = num;

  // Specifically, we're alerting the num variable
  // that's defined outside of this inner function.
  // Each of these inner functions are pointing to the
  // same `num` variable... the one that changes on
  // each iteration, and which equals 3 at the end of
  // the for loop.  Whenever the anonymous function is
  // called on the click event, the function will
  //  reference the same `num` (which now equals 3).

  // ... and when we click, alert the value of `num`
  //   elem.addEventListener("click", function () {
  //     alert(num);
  //   });
  elem.addEventListener(
    "click",
    (function (copyNum) {
      return function () {
        alert(copyNum);
      };
    })(num)
  );

  // finally, let's add this element to the document
  document.body.appendChild(elem);
}

// elem.addEventListener("click", function () {
//   alert(num);
// });
