let workoutModel = {
  students: [
    {
      name: "Froggie",
      daysAbsent: 0,
    },
    {
      name: "Lizardee",
      daysAbsent: 0,
    },
    {
      name: "Walrussie",
      daysAbsent: 0,
    },
    {
      name: "Goatiee",
      daysAbsent: 0,
    },
    {
      name: "Orcas",
      daysAbsent: 0,
    },
    {
      name: "Anacondas",
      daysAbsent: 0,
    },
  ],
  totalDays: 12,
};

let workoutOctopus = {
  init: function () {
    workoutView.init();
  },
  getStudents: function () {
    return workoutModel.students;
  },
  getDays: function () {
    return workoutModel.totalDays;
  },
  updateTotalDaysMissed: function (studentIdx, missedDays) {
    workoutModel.students[studentIdx].daysAbsent = missedDays;
  },
};

let workoutView = {
  init: function () {
    this.headerRow = $("table thead tr");
    this.tableBody = $("table tbody");
    this.allStudents = workoutOctopus.getStudents();
    this.renderAttendanceTableVisual();
    this.renderTotalMissedDays();
  },
  renderAttendanceTableVisual: function () {
    // Build Headers For Table
    $("<th>", {
      html: "Student Name",
    }).appendTo(this.headerRow);

    for (let i = 1; i <= workoutOctopus.getDays(); i++) {
      $("<th>", {
        html: i,
      }).appendTo(this.headerRow);
    }

    $("<th>", {
      html: "Days Missed",
      class: "missed-col",
    }).appendTo(this.headerRow);

    // Build All Students List And Add To Table
    for (let i = 0; i < this.allStudents.length; i++) {
      let studentRow = $("<tr>", {
        class: "student",
      });

      let studentCell = $("<td>", {
        class: "name-col",
        html: this.allStudents[i].name,
      }).appendTo(studentRow);
      studentRow.appendTo(this.tableBody);

      // Build Checkboxes
      for (let j = 0; j < workoutOctopus.getDays(); j++) {
        let checkbox = $("<input>", {
          type: "checkbox",
        }).on("click", this.renderTotalMissedDays);

        $("<td>", {
          class: "attend-col",
        })
          .append(checkbox)
          .appendTo(studentRow);
      }
      $("<td>", {
        class: "missed-col",
        html: this.allStudents[i].daysAbsent,
      }).appendTo(studentRow);
    }
  },
  renderTotalMissedDays: function () {
    let studentRows = $("tr.student");
    for (let i = 0; i < studentRows.length; i++) {
      let daysMissedContainerCollumn = $(studentRows[i]).children(
        ".missed-col"
      );

      let studentCollumnInputCheckboxes = $(studentRows[i])
        .children(".attend-col")
        .children("input");

      let missedDays = 0;
      for (let j = 0; j < studentCollumnInputCheckboxes.length; j++) {
        if ($(studentCollumnInputCheckboxes[j]).is(":checked")) {
          missedDays++;
        }
      }

      daysMissedContainerCollumn.html(missedDays);
      workoutOctopus.updateTotalDaysMissed(i, missedDays);
    }
  },
};

workoutOctopus.init();
