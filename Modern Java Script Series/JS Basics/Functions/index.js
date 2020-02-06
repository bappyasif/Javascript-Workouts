console.log("Javascript Functions");

function greetPereson(name, ethnicity) {
  console.log(`Greetings ${name} Ethinicty ${ethnicity}`);
}

greetPereson("John Doe", "Cauccus");

function addNumbers(a, b) {
  return a + b;
}

const addedNumbers = addNumbers(5, 7);
console.log(addedNumbers);

function multNumbers(a, b) {
  const multResult = a * b;
  console.log(multResult);
}

multNumbers(5, 2);
