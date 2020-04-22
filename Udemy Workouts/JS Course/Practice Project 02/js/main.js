function GetPayer() {
  this.applicants = ["aB"];
  this.init = () => {
    console.log("Hello Buds");
    console.log(`: ${this.applicants.indexOf("aB")} :`);
  };

  this.addApplicants = function () {
    let $this = this;
    // console.log(`: ${this.applicants.indexOf("aBappy")} :`);
    function generateList(input) {
      console.log(input.value);
      console.log(`:: ${$this.applicants.indexOf("aB")} ::`);
      console.log(`:: ${$this.applicants.indexOf(input.value)} ::`);
      let value = input.value;
      //   console.log(value);
      if ($this.checkValid(value.toLowerCase())) {
        // To Do
        console.log(value);
        console.log($this.applicants.indexOf(input));
      } else {
        // To Do
      }
    }

    let addButton = document.querySelector("#add_applicant");
    addButton.addEventListener("click", function (event) {
      event.preventDefault();
      let payerName = document.querySelector("#applicant_value");
      //   console.log(payerName);
      generateList(payerName);
    });
  };
  //   this.init();
  this.checkValid = function (input) {
    $this = this;
    console.log(input);
    console.log(`/ ${this.applicants.indexOf("aB")} /`);
    if (input !== "" && this.applicants.indexOf(input) < 0) {
      console.log(this.applicants.indexOf(input));
      return true;
    }
    return false;
  };
  console.log(`: ${this.applicants.indexOf("aB")} :%%`);
}
let getPayer = new GetPayer();
getPayer.init();
getPayer.addApplicants();
