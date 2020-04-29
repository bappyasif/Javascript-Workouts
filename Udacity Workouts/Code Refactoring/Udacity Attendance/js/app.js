let model = {
  numOfSchoolDays: 12,

  students: [
    {
      name: "Slappy The Frog",
      attendance: [],
    },
    {
      name: "Lilly The Lizard",
      attendance: [],
    },
    {
      name: "Paulrus The Walrus",
      attendance: [],
    },
    {
      name: "Gregory The Goat",
      attendance: [],
    },
    {
      name: "Adam The Anaconda",
      attendance: [],
    },
    {
      name: "Gretchen The Birdie",
      attendance: [],
    },
  ],
  init: function () {
    if (!localStorage.students) {
      this.initAttendance();
      localStorage.students = JSON.stringify(this.students);
    } else {
      this.students = JSON.parse(localStorage.students);
    }
  },
  initAttendance: function () {
    for (let i = 0; i < this.students.length; i++) {
      for (let j = 0; j < this.numOfSchoolDays; j++) {
        this.students[i].attendance.push(Math.random() >= 0.5);
      }
    }
  },
  updateStorage: function () {
    localStorage.students = JSON.stringify(this.students);
  },
};

let octopus = {
  init: function () {
    model.init();
    tableView.init();
  },
  getStudents: function () {
    return model.students;
  },
  getStudent: function (index) {
    return model.students[index];
  },
  getNumberOfStudents: function () {
    return model.students.length;
  },
  getNumberOfClassDays: function () {
    return model.numOfSchoolDays;
  },
  changeAttendance: function (studentIdx, attendanceIdx) {
    let change = !model.students[studentIdx].attendance[attendanceIdx];
    model.students[studentIdx].attendance[attendanceIdx] = change;
    tableView.updateMissedDaysCol(studentIdx);
    model.updateStorage();
  },
  countMissingDaysNumber: function (index) {
    let student = this.getStudent(index);
    let mmissedDays = 0;
    let schoolDays = this.getNumberOfClassDays();
    for (let i = 0; i < schoolDays; i++) {
      if (!student.attendance[i]) {
        mmissedDays++;
      }
    }
    return mmissedDays;
  },
};

let tableView = {
  init: function () {
    this.numOfSchoolDays = octopus.getNumberOfClassDays();
    this.numOfTotalStudents = octopus.getNumberOfStudents();
    this.render();
    this.bindCheckBoxes();
  },
  render: function () {
    $(".thead").html("");
    $(".tbody").html("");
    this.renderStudentHeaderRow();
    let totalStudents = this.numOfTotalStudents;
    for (let i = 0; i < totalStudents; i++) {
      this.renderIndividualStudentRow(i);
    }
  },
  renderStudentHeaderRow: function () {
    let headerRow = `<tr><th class="name-col">Student Name</th>`;
    for (let i = 0; i < this.numOfSchoolDays; i++) {
      headerRow += `<th>${i + 1}</th>`;
    }
    headerRow += `<th class="missed-col">Days Missed</th></tr>`;
    $("thead").append(headerRow);
  },
  renderIndividualStudentRow: function (index) {
    let student = octopus.getStudent(index);
    let studentRow = document.createElement("tr");
    studentRow.className += "student";

    this.renderStudentNameCol(studentRow, student.name);
    this.renderCheckBOxCols(studentRow, student.attendance);
    this.renderMissedDaysCol(studentRow, index);

    $("tbody").append(studentRow);
  },
  renderStudentNameCol: function (row, name) {
    let studentName = document.createElement("td");
    studentName.className += "name-col";
    studentName.innerHTML = name;
    row.append(studentName);
  },
  renderCheckBOxCols: function (row, attendance) {
    for (let i = 0; i < this.numOfSchoolDays; i++) {
      let tdCheckbox = document.createElement("td");
      tdCheckbox.className += "attend-col";

      let inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.checked = attendance[i];

      tdCheckbox.append(inputCheckbox);
      row.append(tdCheckbox);
    }
  },
  renderMissedDaysCol: function (row, index) {
    let missedDayCol = document.createElement("td");
    let missedDays = octopus.countMissingDaysNumber(index);

    missedDayCol.className += "missed-col";
    missedDayCol.innerHTML += missedDays;
    row.append(missedDayCol);
  },
  updateMissedDaysCol: function (index) {
    let missedDays = octopus.countMissingDaysNumber(index);
    $("tbody")
      .children()
      .slice(index, index + 1)
      .children()
      .slice(this.numOfSchoolDays + 1)
      .html(missedDays);
  },
  bindCheckBoxes: function () {
    let tBody = $("tbody");
    for (let i = 0; i < this.numOfTotalStudents; i++) {
      let studentRow = tBody.children().slice(i, i + 1);
      for (let j = 0; j < this.numOfSchoolDays; j++) {
        let checkboxCol = studentRow.children().slice(j + 1, j + 2);
        checkboxCol.change(
          (function (studentIdx, attendanceIdx) {
            return function () {
              octopus.changeAttendance(studentIdx, attendanceIdx);
            };
          })(i, j)
        );
      }
    }
  },
};

octopus.init();
