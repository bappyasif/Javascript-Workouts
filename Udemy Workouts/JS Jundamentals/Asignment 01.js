function is_integer(num) {
  return Number.isInteger(num);
}
console.log(is_integer(3));
console.log(is_integer(3.4));

let anArray = [2, 4, 6, 8];
let sum = 0;
anArray.forEach(item => {
  sum += item;
});
console.log(sum);

function convertTemperature(temp, option) {
  if (option === "Celsius") {
    return temp * (9 / 5) + 32;
  }

  if (option === "Farenheit") {
    return (temp - 32) * (5 / 9);
  }
}

console.log(convertTemperature(32, "Celsius"));
console.log(convertTemperature(32, "Farenheit"));

function numberFactorial(num) {
  let ans = 1;
  for (let i = 2; i <= num; i++) {
    ans *= i;
  }
  return ans;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * numberFactorial(num - 1);
  }
}

console.log(factorial(4));

function amountToCoinsConversion(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      let left = amount - coins[0];
      return [coins[0]].concat(amountToCoinsConversion(left, coins));
    } else {
      coins.shift();
      return amountToCoinsConversion(amount, coins);
    }
  }
}

console.log(amountToCoinsConversion(26, [25, 10, 5, 2, 1]));

function convertAmountToChange(amount, changes) {
  if (amount === 0) {
    console.log("No Change Is Required");
    return [];
  } else if (amount >= changes[0]) {
    let currentAmountToChange = amount - changes[0];
    return [changes[0]].concat(
      convertAmountToChange(currentAmountToChange, changes)
    );
  } else {
    changes.shift();
    return convertAmountToChange(amount, changes);
  }
}

console.log(convertAmountToChange(22, [50, 35, 10, 5, 2, 1]));
