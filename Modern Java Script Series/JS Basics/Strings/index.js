// String Primitives
const exapmle_message = "Hello Strings";
console.log(typeof exapmle_message);

// String Objects
const another_message = new String("Another String");
console.log(typeof another_message);

console.log(exapmle_message.length);
console.log(another_message.includes("String"));
console.log(exapmle_message[1]);
console.log(exapmle_message.indexOf("Hello"));
console.log(another_message.startsWith("A"));
console.log(exapmle_message.endsWith("s"));
console.log(exapmle_message.replace("Strings", "String"));
console.log(another_message.toUpperCase());
console.log(exapmle_message.trim());
console.log(another_message + ' " ' + exapmle_message + ' "');
console.log(exapmle_message + "\n" + another_message);
console.log(another_message.split(" "));

// Template Literals
const some_string = "Some String";
const another_example = 'Example "String"' + "\n" + some_string;
console.log(another_example);
console.log(`Some String "${some_string}"`);
console.log(`${some_string} && ${another_example} Expression ${3 + 2}`);
