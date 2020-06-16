let firstPasswordInput = document.querySelector("#first");
let secondPasswordInput = document.querySelector("#second");
let submit = document.querySelector("#submit");

let symbolPattern = /[\!\@\#\$\%\^\&\*]/g;
let numberPattern = /\d/g;
let lowercasePattern = /[a-z]/g;
let uppercasePattern = /[A-Z]/g;
let unallowedCharacters = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;

submit.onclick = function () {
  let firstPassword = firstPasswordInput.value;
  let secondPassword = secondPasswordInput.value;

  if (firstPassword === secondPassword && firstPassword.length > 0) {
    checkRequirements();
  } else {
    secondPasswordInput.setCustomValidity("Passwords must match!");
  }

  function checkRequirements() {
    if (firstPassword.length < 6) {
      firstPasswordInput.setCustomValidity("Fewer than 16 characters");
    } else if (firstPassword.length >= 10) {
      firstPasswordInput.setCustomValidity("greater than 100 characters");
    }
    // if (firstPassword.length < 6 && secondPassword.length < 6) {
    //   firstPasswordInput.setCustomValidity("Fewer than 16 characters");
    // } else if (firstPassword.length >= 10 && secondPassword.length > 10) {
    //   firstPasswordInput.setCustomValidity("greater than 100 characters");
    // }

    // Pattern Checks
    else if (!firstPassword.match(symbolPattern)) {
      firstPasswordInput.setCustomValidity(
        "missing a symbol (!, @, #, $, %, ^, &, *"
      );
    } else if (!firstPassword.match(numberPattern)) {
      firstPasswordInput.setCustomValidity("missing a number");
      //   return false;
      //   return;
    } else if (!firstPassword.match(lowercasePattern)) {
      firstPasswordInput.setCustomValidity("missing a lowercase letter");
      //   return;
    } else if (!firstPassword.match(uppercasePattern)) {
      firstPasswordInput.setCustomValidity("missing an uppercase letter");
      //   return;
    } else if (firstPassword.match(unallowedCharacters)) {
      firstPasswordInput.setCustomValidity("includes illegal character: ");
      //   return;
    }
    // else if (!secondPassword.match(symbolPattern)) {
    //   firstPasswordInput.setCustomValidity(
    //     "missing a symbol (!, @, #, $, %, ^, &, *"
    //   );
    // } else if (!secondPassword.match(numberPattern)) {
    //   secondPasswordInput.setCustomValidity("missing a number");
    //   //   return false;
    //   //   return;
    // } else if (!secondPassword.match(lowercasePattern)) {
    //   secondPasswordInput.setCustomValidity("missing a lowercase letter");
    //   //   return;
    // } else if (!secondPassword.match(uppercasePattern)) {
    //   secondPasswordInput.setCustomValidity("missing an uppercase letter");
    //   //   return;
    // } else if (secondPassword.match(unallowedCharacters)) {
    //   secondPasswordInput.setCustomValidity("includes illegal character: ");
    //   //   return;
    // } else if (firstPassword !== secondPassword) {
    //   secondPasswordInput.setCustomValidity("Passwords must match!");
    // }
    else {
      //   alert("Password Changed!!");
      firstPasswordInput.setCustomValidity("");
      secondPasswordInput.setCustomValidity("");
      alert("Password Changed!!");
    }
    // else if (!firstPassword.match(symbolPattern)) {
    //   firstPasswordInput.setCustomValidity(
    //     "missing a symbol (!, @, #, $, %, ^, &, *"
    //   );
    // } else if (!firstPassword.match(numberPattern)) {
    //   firstPasswordInput.setCustomValidity("missing a number");
    //   //   return false;
    //   //   return;
    // } else if (!firstPassword.match(lowercasePattern)) {
    //   firstPasswordInput.setCustomValidity("missing a lowercase letter");
    //   //   return;
    // } else if (!firstPassword.match(uppercasePattern)) {
    //   firstPasswordInput.setCustomValidity("missing an uppercase letter");
    //   //   return;
    // } else if (firstPassword.match(unallowedCharacters)) {
    //   firstPasswordInput.setCustomValidity("includes illegal character: ");
    //   //   return;
    // } else if (firstPassword !== secondPassword) {
    //   firstPasswordInput.setCustomValidity("Passwords must match!");
    // } else {
    //   //   alert("Password Changed!!");
    //   firstPasswordInput.setCustomValidity("");
    //   secondPasswordInput.setCustomValidity("");
    //   alert("Password Changed!!");
    // }
  }
};
