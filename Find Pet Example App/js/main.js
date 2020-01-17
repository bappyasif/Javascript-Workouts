//console.log(1234);

import fetchJsonp from "fetch-jsonp";

import { isValidZipCode } from "./validate";

const apiKey = "TBsQwZjZiLQWKNAwWl7Jvu2Et5WKADYUgkg4gA6aaWqDpcuMSC";

const secretKey = "aM2gK1bIQYuN4iyWba2J1Zm6IDSZEYa8DmOardv2";

const pet_form = document.querySelector("#pet-form");
pet_form.addEventListener("submit", fetchAnimals);

// Fetch Animals From API
function fetchAnimals(event) {
    event.preventDefault();

    // Get User Provided Input
    const input_animal = document.querySelector("#animal").value;
    const input_zipcode = document.querySelector("#zip").value;


    // Validate ZipCode
    if(!isValidZipCode(input_zipcode)) {
      alert("Please Enter Valid Zipcode", danger);
      return;
    }

    // Fetch Pets
    fetchJsonp(
        `http://api.petfinder.com/pet.find?format=json&key=apiKey&Secret=secretKey&animal=${input_animal}&location=${input_zipcode}&callback=callback`, {mode: 'no-cors'},
        {
          jsonpCallbackFunction: 'callback'
        }
      )
        .then(res => res.json())
        .then(data => showAnimals(data.petfinder.pets.pet))
        .catch(err => console.log(err));
    }

// JSONP Callback
function callback(data) {
    console.log(data);
}

// Show Listing Of Pets
function showAnimals(pets) {
  const reults_output = document.querySelector("#results");
  // Clear First
  reults_output.innerHTML = "";
  // Loop Through Pets Element
  pets.forEach(pet => {
    //console.log(pet);
    const div = document.createElement("div");
    div.classList.add("card", "card-body", "mb-3");
    div.innerHTML = `
      <div class="row">
        <div class="col-sm-6">
          <h4>${pet.name.$t} (${pet.age.$t})</h4>
          <p class="text-secondary">${pet.breeds.breed.$t}</p>
          <p>${pet.contact.addresss1.$t} ${pet.contact.city.$t}
            ${pet.contact.state.$t} ${pet.contact.zip.$t}
          </p>
          <ul class="list-group">
            <li class ="list-group-item">Phone : ${pet.contact.phone.$t}</li>
            ${pet.contact.email.$t ? `<li class ="list-group-item">Email : ${pet.contact.email.$t}</li>` :``}
            <li class ="list-group-item">Shelter ID : ${pet.shelterId.$t}</li>
          </ul>
        </div>
        <div class="col-sm-6 text-center">
          <img class="img-fluid rounded-circle mt-2" 
          src="${pet.media.photos.photo[3].$t}">
        </div>
      </div>
    `;
    reults_output.appendChild(div);
  });
}