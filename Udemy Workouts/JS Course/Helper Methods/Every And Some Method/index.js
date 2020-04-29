let students = [
  { name: "Francis", grade: 4 },
  { name: "Martin", grade: 5 },
  { name: "Martin", grade: 7 },
];

// Every Requires Each Element Of Array In Hand Meets condition, else returns false.
let everyMethod = students.every((student) => student.grade > 6);
console.log(everyMethod); // returns  false

everyMethod = students.every((student) => student.grade > 3);
console.log(everyMethod); // returns true

// Some Checks If Any Element Of Array In Question Meets Condittion, else returns False.
let someMethod = students.some((student) => student.grade > 6);
console.log(someMethod); // returns true

someMethod = students.some((student) => student.grade > 7);
console.log(someMethod); // returns false
