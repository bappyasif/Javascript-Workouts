let db = [
  { name: "Claire Gray", email: "clairegray@mydomain.com", age: 23 },
  { name: "Cohn Grey", email: "cohngrey@mydomain.com", age: 24 },
  { name: "Loren Hartt", email: "lorenhartt@mydomain.com", age: 26 },
  { name: "Amanda Hartt", email: "amandahartt@mydomain.com", age: 24 }
];

(function avatars(db) {
  let init = () => {
    generateList();
    enterUser();
  };
  let generateList = () => {
    console.log("Generate List");
    let parentContainer = document.querySelector("#parent_avatars");
    let template = "";
    for (let i = 0; i < db.length; i++) {
      template += `
        <div class="col-sm-4">
        <div class="card">
          <div class="card-delete" data-card="${i}">X</div>
          <div class="card-block">
            <h3 class="card-title">${db[i].name}</h3>
            <p class="card-text">
              <strong>Email</strong>:<span>${db[i].email}</span>
            </p>
            <p class="card-text"><strong>Age</strong>:<span>${db[i].age}</span></p>
          </div>
        </div>
      </div>
        `;
      //   console.log(i);
    }
    // console.log(template);
    parentContainer.innerHTML = "";
    parentContainer.insertAdjacentHTML("afterbegin", template);
    deleteCard();
  };

  let enterUser = () => {
    console.log("Form Control");
    function grabUser() {
      let name = document.querySelector("#user_name").value;
      let email = document.querySelector("#user_email").value;
      let age = document.querySelector("#user_age").value;

      let newUser = [name, email, age];
      //   console.log(newArray);
      if (validateUsers(newUser)) {
        console.log("Successfull Entry");
        document.querySelector("#myForm").reset();
        db.push({ name: name, email: email, age: age });
        console.log(db);
        generateList();
      } else {
        console.log("Provide Information");
        document.querySelector("#error").style.display = "block";
        setTimeout(() => {
          document.querySelector("#error").style.display = "noneq";
        }, 2000);
      }
    }
    document
      .querySelector("#myForm")
      .addEventListener("submit", function(event) {
        event.preventDefault();
        grabUser();
      });
  };

  let validateUsers = elements => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] === "") {
        return false;
      }
    }
    return true;
  };

  let deleteThisButton = buttonElement => {
    console.log(buttonElement);
    let buttonObj = parseInt(buttonElement.getAttribute("data-card"));
    console.log(buttonObj);
    db.splice(buttonObj, 1);
    generateList();
  };

  let deleteCard = () => {
    let deleteButtons = document.querySelectorAll(".card-delete");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function(event) {
        deleteThisButton(event.target);
        // deleteThisButton(this);
      });
    }
    console.log(deleteButtons);
  };

  init();
})(db);
