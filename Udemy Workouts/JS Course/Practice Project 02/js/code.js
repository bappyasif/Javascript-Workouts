var getlooser = new getLooser();

function getLooser() {
  this.applicants = [];

  this.init = function () {
    this.addApplicants();
  };

  this.showList = function () {
    var parent = document.querySelector(".applicant_list_wrapper");
    var template = "";

    for (var i = 0; i < this.applicants.length; i++) {
      template +=
        '<span class="name-tag" data-id="' +
        i +
        '">' +
        this.applicants[i] +
        "</span>";
    }

    parent.innerHTML = "";
    parent.insertAdjacentHTML("afterbegin", template);
    this.deleteOne();
  };

  this.addApplicants = function () {
    var $this = this;

    function generateList(input) {
      var value = input.value;

      if ($this.checkValid(value.toLowerCase())) {
        $this.applicants.push(value.toLowerCase());
        input.value = "";
        $this.showList();
      } else {
        alert("Something is wrong");
      }
    }

    var addBtn = document.querySelector("#add_applicant");
    addBtn.addEventListener("click", function () {
      var input = document.querySelector("#applicant_value");
      generateList(input);
    });
  };

  this.checkValid = function (value) {
    if (this.applicants.indexOf(value) < 0 && value != "") {
      return true;
    }
    return false;
  };

  this.deleteOne = function () {
    var $this = this;
    var item = document.querySelectorAll(".name-tag");

    function removeIt(element) {
      var attr = parseInt(element.getAttribute("data-id"));
      $this.applicants.splice(attr, 1);

      $this.showList();
    }

    for (var i = 0; i < item.length; i++) {
      item[i].addEventListener("click", function (e) {
        removeIt(this);
      });
    }
  };
}

getlooser.init();
