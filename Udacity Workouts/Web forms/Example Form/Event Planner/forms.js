let next = document.getElementById("next");
let submit = document.getElementById("form-submit");
let eventName = document.getElementById("event-name");
let eventType = document.getElementById("event-kind");
let eventHost = document.getElementById("event-host");
let eventStarts = document.getElementById("event-starts");
let eventEnds = document.getElementById("event-ends");
let eventPlace = document.getElementById("event-place");
let eventAnnouncement = document.getElementById("event-shoutout");
let guestList = document.getElementById("event-guests");
let formOutput = document.querySelector(".form-output");

next.addEventListener("click", function () {
  console.log("....");
  console.log(document.getElementsByTagName("fieldset"));
  let fieldsets = document.getElementsByTagName("fieldset");
  document.getElementsByTagName("fieldset")[0].classList.remove("active");
  document.getElementsByTagName("fieldset")[1].classList.add("active");

  next.addEventListener("click", function () {
    document.getElementsByTagName("fieldset")[1].classList.remove("active");
    document.getElementsByTagName("fieldset")[2].classList.add("active");
    let name = eventName.value;
    let type = eventType.value;
    let host = eventHost.value;
    let starts = eventStarts.value;
    let ends = eventEnds.value;
    let place = eventPlace.value;
    let shoutout = eventAnnouncement.value;
    let list = guestList.value;
    let header = document.getElementsByTagName("header")[0];
    header.innerText = "See You All There";

    formOutput.innerHTML = `
          <div>${name}</div>
          <div>${type}</div>
          <div>${host}</div>
          <div>${starts}</div>
          <div>${ends}</div>
          <div>${place}</div>
          <div>${shoutout}</div>
          <div>${list}</div>
    `;
    event.preventDefault();

    if (fieldsets[2].classList.contains("active")) {
      console.log("zzzz");
      next.innerHTML = "done";
      //   next.style.visibility = "hidden";
      next.classList.add("done");

      setTimeout(() => {
        next.style.visibility = "hidden";
        // document.getElementsByTagName("fieldset")[2].classList.remove("active");
        // document.getElementsByTagName("fieldset")[0].classList.add("active");
        // header.innerText = "Create Another Event Together??";
        // next.innerHTML = "NEXT";
        // next.style.visibility = "visible";
      }, 2000);
    }

    // next.style.visibility = "hidden";
  });
});

// if (fieldsets.length === 3) {
//   next.remove();
// }

// let done = document.querySelector("#next .done");
// done.addEventListener("submit", function () {
//   console.log("done");
//   document.getElementsByTagName("fieldset")[0].classList.add("active");
// });
