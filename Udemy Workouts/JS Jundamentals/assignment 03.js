function largestString(strings) {
  let longest = strings.reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr;
  });

  return longest;
}

console.log(largestString(["aa", "aaaa", "aaaaaaaaa", "aaaa"]));
// function largestString(stringsArray) {
//     return stringsArray.filter(item => {
//         return Math.max(item, )
//     })
// }

function squaredNumbers(numberArray) {
  return numberArray.map(element => {
    return element * element;
  });
}
console.log(
  squaredNumbers([1, 2, 3, 4]).reduce((prev, curr) => {
    return prev + curr;
  })
);

function evenNumbers(numberArray) {
  return numberArray.filter(element => {
    return element % 2 === 0;
  });
}
console.log(evenNumbers([1, 2, 3, 4]));

function criterionFunction(element) {
  return element > 0;
}

// function filteredElement(numberArray, criterionFunction) {
//   return numberArray.filter(criterionFunction);
//   //   return numberArray.filter(el => {
//   //     return criterionFunction(el);
//   //   });
// }

let resArray = [-2, -1, 1, 2].filter(criterionFunction);
console.log(resArray);

function filteringFunc(numberArray, filterFunc) {
  let resArray = numberArray.filter(filterFunc);
  return resArray;
}

console.log(filteringFunc([-2, -1, 1, 2], criterionFunction));
