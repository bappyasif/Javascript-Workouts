console.log(" JS Arrays");

let selectedColors = ["green", "red"];

selectedColors[2] = "blue";

selectedColors[3] = 4;

console.log(selectedColors);
console.log(selectedColors[0]);

console.log(typeof selectedColors);
console.log(selectedColors.length);

for (let key in selectedColors) {
  console.log(key);
  console.log(`${key} in index ${selectedColors[key]}`);

  if (typeof selectedColors[key] !== "number") {
    //console.log(`${key} in index ${selectedColors[key]}`);
    console.log("Not Number");
  }
}
