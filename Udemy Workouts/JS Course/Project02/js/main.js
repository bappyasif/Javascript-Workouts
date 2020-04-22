function GetPayer() {
  this.applicants = [];
  this.init = () => {
    // console.log("Program Starting....");
    this.addApplicants();
    this.showLooser();
    this.runAgain();
    this.startAgain();
    // console.log("Program Ending....");
  };

  this.showList = () => {
    let wrapperContainer = document.querySelector(".applicant_list_wrapper");
    let htmlTemplate = "";
    for (let payer in this.applicants) {
      //   htmlTemplate += this.applicants[payer];
      htmlTemplate += `<span class="name-tag" data-id="${payer}">${this.applicants[payer]}</span>`;
    }
    wrapperContainer.innerHTML = "";
    wrapperContainer.insertAdjacentHTML("afterbegin", htmlTemplate);
    this.deleteContestant();
  };

  this.addApplicants = () => {
    let generateList = (input) => {
      let value = input.value;
      console.log(value);
      if (this.checkValid(value.toLowerCase())) {
        console.log(value.toLowerCase());
        this.applicants.push(value.toLowerCase());
        this.showList();
        input.value = "";
      } else {
        // console.log("Something's Wrong!!");
        alert("Something's Wrong!!");
      }
    };

    let addButton = document.querySelector("#add_applicant");
    addButton.addEventListener("click", function (event) {
      let input = document.querySelector("#applicant_value");
      generateList(input);
    });
  };

  this.checkValid = (value) => {
    if (value !== "" && this.applicants.indexOf(value) < 0) {
      return true;
    }
    return false;
  };

  this.showLooser = () => {
    let $this = this;
    // console.log("Announcing Looser!!");

    let showButton = document.querySelector("#show_results");

    let announceLooser = () => {
      let resultsContainer = document.querySelector(".results_container");
      let applicantsContainer = document.querySelector(".applicant_container");

      applicantsContainer.className += " hidden";
      resultsContainer.className = "results_container";

      this.showPayer();
    };

    showButton.addEventListener("click", function (event) {
      if ($this.applicants.length > 1) {
        announceLooser();
      } else {
        // console.log("Add Users");
        alert("Add Users");
      }
    });
  };

  this.showPayer = () => {
    let resultsContainer = document.querySelector(".result");

    let randomCalc = Math.floor(Math.random() * this.applicants.length);
    let randomLooser = this.applicants[randomCalc];
    // console.log(randomLooser);
    resultsContainer.innerHTML = "";
    resultsContainer.insertAdjacentHTML(
      "afterbegin",
      `<h3>${randomLooser}</h3>`
    );
  };

  this.runAgain = () => {
    let $this = this;
    let runAgainBtn = document.querySelector(".run_again");
    runAgainBtn.addEventListener("click", function (event) {
      $this.showPayer();
    });
  };

  this.startAgain = () => {
    let $this = this;
    let startAgnainBtn = document.querySelector(".start_again");

    startAgnainBtn.addEventListener("click", function (event) {
      let resultsContainer = document.querySelector(".results_container");
      let applicantsContainer = document.querySelector(".applicant_container");
      let applicantWrapper = document.querySelector(".applicant_list_wrapper");

      resultsContainer.className = "results_container hidden";
      applicantsContainer.className = "applicant_container";
      applicantWrapper.innerHTML = "";
      $this.applicants = [];
    });
  };

  this.deleteContestant = () => {
    let contestents = document.querySelectorAll(".name-tag");
    // console.log(contestents);

    let removeIt = (element) => {
      let dataAttribute = parseInt(element.getAttribute("data-id"));
      //   console.log(dataAttribute);
      //   console.log(this.applicants);
      this.applicants.splice(dataAttribute, 1);
      //   console.log(this.applicants);
      this.showList();
    };

    // for (let payer in contestents) {
    //   contestents[payer].addEventListener("click", function (event) {
    //     // removeIt(event.target);
    //     removeIt(this);
    //   });
    // }
    for (let i = 0; i < contestents.length; i++) {
      contestents[i].addEventListener("click", function (event) {
        removeIt(event.target);
      });
    }
  };
}
let loser = new GetPayer();
loser.init();
