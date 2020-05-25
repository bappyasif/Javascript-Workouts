let model = {
  schoolDays: 12,
  students: [
    {
      name: "The Frog",
      attendance: [],
    },
    {
      name: "The Lizard",
      attendance: [],
    },
    {
      name: "The Walrus",
      attendance: [],
    },
    {
      name: "The Goat",
      attendance: [],
    },
    {
      name: "The Orcas",
      attendance: [],
    },
    {
      name: "The Birdie",
      attendance: [],
    },
  ],
  initFunc: function () {
    if (!localStorage.students) {
      this.createAttendance();
      localStorage.students = JSON.stringify(this.students);
    } else {
      this.students = JSON.parse(localStorage.students);
    }
  },
  createAttendance: function () {
    for (let i = 0; i < this.students.length; i++) {
      for (let j = 0; j < this.schoolDays; j++) {
        this.students[i].attendance.push(Math.random() >= 0.5);
      }
    }
  },
  storageUpdate: function () {
    localStorage.students = JSON.stringify(this.students);
  },
};

let octopus = {
  initFunc: function () {
    model.initFunc();
    tableView.initFunc();
  },
  allStudents: function () {
    return model.students;
  },
  individualStudent: function (index) {
    return model.students[index];
  },
  totalDays: function () {
    return model.schoolDays;
  },
  totalStudents: function () {
    return model.students.length;
  },
  missingDaysForIndividual: function (index) {
    let student = this.individualStudent(index);
    let missedDays = 0;
    let schoolDays = this.totalDays();
    for (let i = 0; i < schoolDays; i++) {
      if (!student.attendance[i]) {
        missedDays++;
      }
    }
    return missedDays;
  },
  changeInStudentAttendance: function (studentIdx, attendanceIdx) {
    let changed = !model.students[studentIdx].attendance[attendanceIdx];
    model.students[studentIdx].attendance[attendanceIdx] = changed;
    tableView.updateMissedDaysCol(studentIdx);
    model.storageUpdate();
  },
};

let tableView = {
  initFunc: function () {
    this.totalDays = octopus.totalDays();
    this.totalStudents = octopus.totalStudents();
    this.render();
    this.bindCheckboxes();
  },
  render: function () {
    $(".thead").html("");
    $(".tbody").html("");
    this.renderAttendanceHeaderRow();
    let totalStudents = this.totalStudents;
    for (let i = 0; i < totalStudents; i++) {
      this.renderEachStudentHeader(i);
    }
  },
  renderAttendanceHeaderRow: function () {
    let headerRow = `<tr><th class="name-col">Student Name</th>`;
    for (let i = 0; i < this.totalDays; i++) {
      headerRow += `<th>${i + 1}</th>`;
    }
    headerRow += `<th class="missed-col">Days Missed</th></tr>`;
    $("thead").append(headerRow);
  },
  renderEachStudentHeader: function (studentIdx) {
    let student = octopus.individualStudent(studentIdx);
    let studentRow = document.createElement("tr");
    studentRow.className += "student";

    this.renderStudentsNamesCol(studentRow, student.name);
    this.checkboxCol(studentRow, student.attendance);
    this.renderDaysMissedCol(studentRow, studentIdx);
    $("tbody").append(studentRow);
  },
  renderStudentsNamesCol: function (row, name) {
    let studentName = document.createElement("td");
    studentName.className += "name-col";
    studentName.innerHTML = name;
    row.append(studentName);
  },
  checkboxCol: function (row, attendance) {
    for (let i = 0; i < this.totalDays; i++) {
      let tdCheckbox = document.createElement("td");
      tdCheckbox.className += "attend-col";

      let inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.checked = attendance[i];

      tdCheckbox.append(inputCheckbox);
      row.append(tdCheckbox);
    }
  },
  renderDaysMissedCol: function (row, studentIdx) {
    let missedCol = document.createElement("td");
    let missedDays = octopus.missingDaysForIndividual(studentIdx);

    missedCol.className += "missed-col";
    missedCol.innerHTML += missedDays;
    row.append(missedCol);
  },
  updateMissedDaysCol: function (studentIdx) {
    let missedDays = octopus.missingDaysForIndividual(studentIdx);
    $("tbody")
      .children()
      .slice(studentIdx, studentIdx + 1)
      .children()
      .slice(this.totalDays)
      .html(missedDays);
  },
  bindCheckboxes: function () {
    let tBody = $("tbody");
    for (let i = 0; i < this.totalStudents; i++) {
      let studentRow = tBody.children().slice(i, i + 1);
      for (let j = 0; j < this.totalDays; j++) {
        let checkboxCol = studentRow.children().slice(j + 1, j + 2);
        checkboxCol.change(
          (function (studentIdx, attendanceIdx) {
            return function () {
              octopus.changeInStudentAttendance(studentIdx, attendanceIdx);
            };
          })(i, j)
        );
      }
    }
  },
};

octopus.initFunc();
