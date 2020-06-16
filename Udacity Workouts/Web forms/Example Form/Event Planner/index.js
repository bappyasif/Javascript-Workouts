console.log("Howdy Y'all");
// let userName = document.getElementById('user-name');
// let userPassword = document.getElementById('user-password');
let next = document.getElementById("next-form");
next.addEventListener("click", function () {
  console.log("....");
  document.getElementsByTagName("fieldset")[0].classList.remove("active");
  document.getElementsByTagName("fieldset")[1].classList.add("active");
});

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

submit.addEventListener("click", function (event) {
  //   console.log("....");
  //   console.log(eventName.value);

  // event.preventDefault();

  let name = eventName.value;
  let type = eventType.value;
  let host = eventHost.value;
  let starts = eventStarts.value;
  let ends = eventEnds.value;
  let place = eventPlace.value;
  let shoutout = eventAnnouncement.value;
  let list = guestList.value;

  console.log(document.getElementsByTagName("fieldset")[0]);
  //   document.getElementsByTagName("fieldset")[0].style.display = "none";
  //   document.getElementsByTagName("fieldset")[1].style.display = "block";

  document.getElementsByTagName("fieldset")[1].classList.remove("active");
  document.getElementsByTagName("fieldset")[2].classList.add("active");

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
});

// let name = eventName.value;
// let type = eventType.value;
// let host = eventHost.value;
// let starts = eventStarts.value;
// let ends = eventEnds.value;
// let place = eventPlace.value;
// let shoutout = eventAnnouncement.value;
// let list = guestList.value;

// let header = document.getElementsByTagName("header")[0];
// header.innerText = "See You All There";

// formOutput.innerHTML = `
//         <div>${name}</div>
//         <div>${type}</div>
//         <div>${host}</div>
//         <div>${starts}</div>
//         <div>${ends}</div>
//         <div>${place}</div>
//         <div>${shoutout}</div>
//         <div>${list}</div>
//   `;
