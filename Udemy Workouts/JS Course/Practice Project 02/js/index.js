function GetPayer() {
  this.applicants = [];

  this.init = function () {
    // console.log("Inside Init");
    this.addApplicants();
    this.announcePayer();
    this.startAgain();
    this.runAgain();
  };

  this.showList = function () {
    let wrapperContainer = document.querySelector(".applicant_list_wrapper");
    let htmlTemplate = "";
    for (let i = 0; i < this.applicants.length; i++) {
      // htmlTemplate += this.applicants[i];
      htmlTemplate += `<span class="name-tag" data-id="${i}">${this.applicants[i]}</span>`;
    }
    // console.log(htmlTemplate);
    wrapperContainer.innerHTML = "";
    wrapperContainer.insertAdjacentHTML("afterbegin", htmlTemplate);
    this.deletePayee();
  };

  this.addApplicants = function () {
    let $this = this;
    function generateList(input) {
      let value = input.value;
      //   console.log(value);
      if ($this.checkValid(value.toLowerCase())) {
        // TO Do
        // console.log(value);
        $this.applicants.push(value.toLowerCase());
        // console.log($this.applicants);
        $this.showList();
        input.value = "";
      } else {
        // Do That
        console.log("Somethings Wrong");
      }
    }

    let addBtuton = document.querySelector("#add_applicant");
    addBtuton.addEventListener("click", function () {
      let input = document.querySelector("#applicant_value");
      //   console.log(input);
      generateList(input);
    });
  };

  this.checkValid = function (value) {
    if (value !== "" && this.applicants.indexOf(value) < 0) {
      //   console.log(value);
      return true;
    }
    return false;
  };

  this.announcePayer = function () {
    let $this = this;
    let resultButton = document.querySelector("#show_results");

    function announceResult() {
      let resultsContainer = document.querySelector(".results_container");
      let applicantsContainer = document.querySelector(".applicant_container");

      applicantsContainer.className += " hidden";
      resultsContainer.className = "results_container";

      $this.showPayer();
    }

    resultButton.addEventListener("click", function (event) {
      if ($this.applicants.length > 1) {
        announceResult();
      } else {
        console.log("Add Users");
      }
    });
  };

  this.showPayer = function () {
    let resultsConatiner = document.querySelector(".result");

    let randomCalc = Math.floor(Math.random() * this.applicants.length);
    let randomPayee = this.applicants[randomCalc];

    // console.log(randomPayee);
    // console.log(randomCalc);
    resultsConatiner.innerHTML = "";
    resultsConatiner.insertAdjacentHTML(
      "afterbegin",
      `<h3>${randomPayee}</h3>`
    );
  };

  this.runAgain = function () {
    // To Do
    let $this = this;
    let runAgainBtn = document.querySelector(".run_again");
    runAgainBtn.addEventListener("click", function (event) {
      $this.showPayer();
    });
  };

  this.startAgain = function () {
    // To Do
    let $this = this;
    let startAgainBtn = document.querySelector(".start_again");

    startAgainBtn.addEventListener("click", function (event) {
      let resultsConatiner = document.querySelector(".results_container");
      let applicantsConatiner = document.querySelector(".applicant_container");
      let applicantsWrapper = document.querySelector(".applicant_list_wrapper");

      resultsConatiner.className = "results_container hidden";
      applicantsConatiner.className = "applicant_container";
      applicantsWrapper.innerHTML = "";

      $this.applicants = [];
    });
  };

  this.deletePayee = function () {
    // To Do
    let $this = this;

    let payees = document.querySelectorAll(".name-tag");
    // console.log(payees);

    function removeIt(element) {
      // console.log(element);
      let dataAttribute = parseInt(element.getAttribute("data-id"));
      // console.log(dataAttribute);
      // console.log($this.applicants);
      $this.applicants.splice(dataAttribute, 1);
      // console.log($this.applicants);
      $this.showList();
    }

    for (let i = 0; i < payees.length; i++) {
      payees[i].addEventListener("click", function (event) {
        // removeIt(event.target);
        removeIt(this);
      });
    }
  };
}

let payee = new GetPayer();
payee.init();
