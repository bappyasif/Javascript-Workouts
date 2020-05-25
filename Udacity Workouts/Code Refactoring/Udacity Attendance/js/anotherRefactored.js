let model = {
  studs: [
    {
      name: "The Frog",
      daysAbsent: 0,
    },
    {
      name: "The Lizard",
      daysAbsent: 0,
    },
    {
      name: "The Walrus",
      daysAbsent: 0,
    },
    {
      name: "The Goat",
      daysAbsent: 0,
    },
    {
      name: "The Orca",
      daysAbsent: 0,
    },
    {
      name: "The Anaconda",
      daysAbsent: 0,
    },
  ],
  totalDays: 12,
};

let octopus = {
  init: function () {
    view.init();
  },
  getStudents: function () {
    return model.studs;
  },
  getDays: function () {
    return model.totalDays;
  },
  updateTotalDaysMissed: function (studIdx, missedDays) {
    model.studs[studIdx].daysAbsent = missedDays;
  },
};

let view = {
  init: function () {
    this.headerRow = $("table thead tr");
    this.tableBody = $("table tbody");
    this.students = octopus.getStudents();
    this.renderUI();
    this.renderTotalMissedDays();
  },
  renderUI: function () {
    // build Table Header Row
    $("<th/>", {
      html: "Student Name",
    }).appendTo(this.headerRow);

    for (let i = 1; i <= octopus.getDays(); i++) {
      $("<th/>", {
        html: i,
      }).appendTo(this.headerRow);
    }

    $("<th/>", {
      html: "Days Missed",
      class: "missed-col",
    }).appendTo(this.headerRow);

    // Build All Students List
    for (let j = 0; j < this.students.length; j++) {
      let studentRow = $("<tr/>", {
        class: "student",
      });
      let studentCell = $("<td/>", {
        class: "name-col",
        html: this.students[j].name,
      }).appendTo(studentRow);
      studentRow.appendTo(this.tableBody);
      // Build Checkboxes
      for (let k = 1; k <= octopus.getDays(); k++) {
        let checkbox = $("<input/>", {
          type: "checkbox",
        }).on("click", this.renderTotalMissedDays);
        $("<td/>", {
          class: "attend-col",
        })
          .append(checkbox)
          .appendTo(studentRow);
      }
      $("<td/>", {
        class: "missed-col",
        html: this.students[j].daysAbsent,
      }).appendTo(studentRow);
    }
  },
  renderTotalMissedDays: function () {
    let studentRows = $("tr.student");
    // console.log(studentRows);
    for (let i = 0; i < studentRows.length; i++) {
      let daysMissedContainerCollumn = $(studentRows[i]).children(
        ".missed-col"
      );
      let studentCollumnCheckboxInputs = $(studentRows[i])
        .children(".attend-col")
        .children("input");
      let missedDays = 0;
      for (let j = 0; j < studentCollumnCheckboxInputs.length; j++) {
        if ($(studentCollumnCheckboxInputs[j]).is(":checked")) {
          missedDays++;
        }
      }
      daysMissedContainerCollumn.html(missedDays);
      octopus.updateTotalDaysMissed(i, missedDays);
    }
  },
};

octopus.init();
// console.log(model.studs);
