// DOM Elemnts
const time_element = document.getElementById("time");
const greeting_element = document.getElementById("greeting");
const name_element = document.getElementById("name"),
      focus_element = document.getElementById("focus");

// AM Or PM Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
        // Set AM Or PM
        const amPM = hour >= 12 ? "PM" : "AM";

        // 12 Hour Time Format
        hour = hour % 12 || 12;

        // Output Time
        time_element.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ""}`;
        
        setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return(parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background And Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12) {
        // Morning Hours
        document.body.style.backgroundImage = "url('../imgs/morning.jpg')";
        greeting_element.textContent = "Good Morning, ";
    } else if(hour < 18) {
        // Afternoon Hours
        document.body.style.backgroundImage = "url('../imgs/afternoon.jpg')";
        greeting_element.textContent = "Good Afternoon, ";
    } else {
        // Evening Hours
        document.body.style.backgroundImage = "url('../imgs/night.jpg')";
        greeting_element.textContent = "Good Evening, ";
        document.body.style.color = "white";
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
      name_element.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }
  
  // Set Name
  function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name_element.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
  
  // Get Focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus_element.textContent = '[Enter Focus]';
    } else {
      focus_element.textContent = localStorage.getItem('focus');
    }
  }
  
  // Set Focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus_element.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

name_element.addEventListener('keypress', setName);
name_element.addEventListener('blur', setName);
focus_element.addEventListener('keypress', setFocus);
focus_element.addEventListener('blur', setFocus);

// Run Show Time Function
showTime();

// Run Banckground Images Function
setBgGreet();

// Run Get Name Function
getName();

// Run Get Focus Function
getFocus();