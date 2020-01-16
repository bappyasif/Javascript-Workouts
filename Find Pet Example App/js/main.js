//console.log(1234);

import fetchJsonp from "fetch-jsonp";

const pet_form = document.querySelector("#pet-form");
pet_form.addEventListener("submit", fetchAnimals);

// Fetch Animals From API
function fetchAnimals(event) {
    event.preventDefault();

    // Get User Provided Input
    const input_animal = document.querySelector("#animal").value;
    const input_zipcode = document.querySelector("#zip").value;

    // Fetch Pets
    fetchJsonp(
        `http://api.petfinder.com/pet.find?format=json&key=TBsQwZjZiLQWKNAwWl7Jvu2Et5WKADYUgkg4gA6aaWqDpcuMSC&animal=${input_animal}&location=${input_zipcode}&callback=callback`, {mode: 'no-cors'},
        {
          jsonpCallbackFunction: 'callback'
        }
      )
        .then(res => res.json())
        .then(data => showAnimals(data))
        .catch(err => console.log(err));
    }

// JSONP Callback
function callback(data) {
    console.log(data);
}