/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector("#first");
var secondPasswordInput = document.querySelector("#second");
var submit = document.querySelector("#submit");

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

    // break;
    // if (checkRequirements()) {
    //   //   return true;
    //   break;
    // }
  } else {
    secondPasswordInput.setCustomValidity("Passwords must match!");
  }

  function checkRequirements() {
    if (firstPassword.length < 6) {
      firstPasswordInput.setCustomValidity("Fewer than 16 characters");
      //   return;
    } else if (firstPassword.length >= 10) {
      firstPasswordInput.setCustomValidity("greater than 100 characters");
      //   return;
    }

    // Pattern Checks
    if (!firstPassword.match(symbolPattern)) {
      firstPasswordInput.setCustomValidity(
        "missing a symbol (!, @, #, $, %, ^, &, *"
      );

      if (!firstPassword.match(numberPattern)) {
        firstPasswordInput.setCustomValidity("missing a number");
        //   return false;
        //   return;
      }

      if (!firstPassword.match(lowercasePattern)) {
        firstPasswordInput.setCustomValidity("missing a lowercase letter");
        //   return;
      }

      if (!firstPassword.match(uppercasePattern)) {
        firstPasswordInput.setCustomValidity("missing an uppercase letter");
        //   return;
      }

      if (firstPassword.match(unallowedCharacters)) {
        firstPasswordInput.setCustomValidity("includes illegal character: ");
        //   return;
      }
    }
    //   return;
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
    // } else {
    //   return false;
    // }

    // if (firstPassword === secondPassword) {
    //   break;
    // }

    // return false;
    // if (!secondPassword.match(symbolPattern)) {
    //   secondPasswordInput.setCustomValidity(
    //     "missing a symbol (!, @, #, $, %, ^, &, *"
    //   );
    // }

    // if (!secondPassword.match(numberPattern)) {
    //   secondPasswordInput.setCustomValidity("missing a number");
    // }

    // if (!secondPassword.match(lowercasePattern)) {
    //   secondPasswordInput.setCustomValidity("missing a lowercase letter");
    // }

    // if (!secondPassword.match(uppercasePattern)) {
    //   secondPasswordInput.setCustomValidity("missing an uppercase letter");
    // }

    // if (secondPassword.match(unallowedCharacters)) {
    //   secondPasswordInput.setCustomValidity("includes illegal character: ");
    // }
  }
};
