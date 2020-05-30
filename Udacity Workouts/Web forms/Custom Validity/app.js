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

// lets use an issuetracker to format validation messages
function IssueTracker() {
  this.issues = [];
}

IssueTracker.prototype = {
  add: function (issue) {
    this.issues.push(issue);
    console.log(issue);
  },
  retrieve: function () {
    let message = "";
    switch (this.issues.length) {
      case 0:
        break;
      case 1:
        message = "Please correct the following issue:\n" + this.issues[0];
        break;
      default:
        "Please correct the following issues:\n" + this.issues.join("\n");
        break;
    }
    return message;
  },
};

/*
You'll probably find this function useful...
 */

// submit.addEventListener("submit", function () {
//   //
// });
submit.onclick = function () {
  let firstPassword = firstPasswordInput.value;
  let secondPassword = secondPasswordInput.value;

  let firstInputIssuesTracker = new IssueTracker();
  let secondInputIssuesTracker = new IssueTracker();

  // when both parameters equals
  function checkRequirements() {
    if (firstPassword < 16) {
      firstInputIssuesTracker.add("fewer than 16 characters");
    } else if (firstPassword.length > 100) {
      firstInputIssuesTracker.add("greater than 100 characters");
    }

    if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {
      firstInputIssuesTracker.add("missing a symbol (!, @, #, $, %, ^, &, *)");
    }

    if (!firstPassword.match(/\d/g)) {
      firstInputIssuesTracker.add("missing a number");
    }

    if (!firstPassword.match(/[a-z]/g)) {
      firstInputIssuesTracker.add("missing a lowercase letter");
    }

    if (!firstPassword.match(/[A-Z]/g)) {
      firstInputIssuesTracker.add("missing an uppercase letter");
    }

    let illegalCharactersGroup = firstPassword.match(
      /[^A-z0-9\!\@\#\$\%\^\&\*]/g
    );
    if (illegalCharactersGroup) {
      illegalCharactersGroup.forEach((illegalChar) => {
        firstInputIssuesTracker.add(
          "includes illegal character: " + illegalChar
        );
      });
    }
  }

  // validation checks
  if (firstPassword === secondPassword && firstPassword.length > 0) {
    checkRequirements();
  } else {
    secondInputIssuesTracker.add("Passwords must match!");
  }

  let firstInputIssues = firstInputIssuesTracker.retrieve();
  let secondInputIssues = secondInputIssuesTracker.retrieve();

  // setCustomValidity awesomeness
  firstPasswordInput.setCustomValidity(firstInputIssues);
  secondPasswordInput.setCustomValidity(secondInputIssues);

  //   firstPasswordInput.setCustomValidity(firstInputIssues);
  //   secondPasswordInput.setCustomValidity(secondInputIssues);

  // on success
  if (firstInputIssues.length + secondInputIssues.length === 0) {
    alert("Password change was successful!");
  }
};

// function submitHandler() {
//   console.log(event);
// }
