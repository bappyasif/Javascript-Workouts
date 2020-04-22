function Payer() {
  this.applicants = ["aB"];

  this.init = () => {
    this.addApplicants();
  };

  this.addApplicants = () => {
    let generateList = (input) => {
      let value = input.value;
      //   console.log(value);
      if (this.checkValid(input.value.toLowerCase())) {
        // TO Do
        console.log(value);
        // console.log(this.applicants.indexOf(input.value));
        // console.log(this.applicants.indexOf("aB"));
        this.applicants.push(value.toLowerCase());
        // input.value = "";
        console.log(this.applicants);
      } else {
        // Show Error
        console.log("Somethings Wrong");
      }
    };

    let addButton = document.querySelector("#add_applicant");
    addButton.addEventListener("click", function (event) {
      let input = document.querySelector("#applicant_value");
      generateList(input);
    });
  };

  this.checkValid = (input) => {
    if (input !== "" && this.applicants.indexOf(input) < 0) {
      return true;
    }
    return false;
    // console.log(value);
  };
}

let payee = new Payer();
payee.init();
// payee.addApplicants();
