let usersArray = [
  {
    name: "Sarati Katja",
    ethnicity: "Asian",
    age: 23,
    email: "sarati@mydomain.com"
  },
  {
    name: "Cameroon Katja",
    ethnicity: "latina",
    age: 24,
    email: "cameroon@mydomain.com"
  },
  {
    name: "Loren Huny",
    ethnicity: "Blonde",
    age: 23,
    email: "loren@mydomain.com"
  },
  {
    name: "Galadriel Gray",
    ethnicity: "Brunnette",
    age: 24,
    email: "gg@mydomain.com"
  }
];

(function(db) {
  let init = () => {
    generateList();
    userForm();
  };
  let generateList = () => {
    // console.log("Generate List");
    let parentContainer = document.querySelector("#parent_avatars");
    let contentTemplate = "";
    for (let i = 0; i < db.length; i++) {
      contentTemplate += `
            <div class="col-sm-5">
            <div class="card">
              <div class="card-delete" data-card="${i}">X</div>
              <div class="card-block">
                <h3 class="card-title">${db[i].name}</h3>
                <p class="card-text">
                  <strong>Ethnicity</strong> : <span>${db[i].ethnicity}</span>
                  <strong>Age</strong> : <span>${db[i].age}</span>
                  <strong>Email</strong> :
                  <span>${db[i].email}</span>
                </p>
              </div>
            </div>
          </div>
            `;
    }
    parentContainer.innerHTML = "";
    parentContainer.insertAdjacentHTML("afterbegin", contentTemplate);
    deleteCard();
  };

  let userForm = () => {
    console.log("User Form");
    let grabUser = () => {
      let name = document.querySelector("#user_name").value;
      let ethnicity = document.querySelector("#user_ethnicity").value;
      let age = document.querySelector("#user_age").value;
      let email = document.querySelector("#user_email").value;

      let newUser = [name, ethnicity, age, email];
      if (validUser(newUser)) {
        console.log("Successfull Entry");
        document.querySelector("#myForm").reset();
        db.push({ name: name, ethnicity: ethnicity, age: age, email: email });
        // console.log(db);
        generateList();
      } else {
        console.log("Provide Information");
        document.querySelector("#error").style.display = "block";
        setTimeout(() => {
          document.querySelector("#error").style.display = "none";
        }, 2000);
      }
    };

    document
      .querySelector("#myForm")
      .addEventListener("submit", function(event) {
        event.preventDefault();
        grabUser();
      });
  };

  let validUser = elements => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] === "") {
        return false;
      }
    }
    return true;
  };

  let deleteThisButton = buttonElement => {
    console.log(buttonElement);
    let buttonObject = parseInt(buttonElement.getAttribute("data-card"));
    console.log(buttonObject);
    db.splice(buttonObject, 1);
    generateList();
  };

  let deleteCard = () => {
    let allDeleteButtons = document.querySelectorAll(".card-delete");
    for (let i = 0; i < allDeleteButtons.length; i++) {
      allDeleteButtons[i].addEventListener("click", function(event) {
        deleteThisButton(event.target);
      });
    }
  };
  init();
})(usersArray);
