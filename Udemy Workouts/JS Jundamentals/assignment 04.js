function Rectangle(h, w) {
  this.height = h;
  this.width = w;
  this.area = function() {
    return this.height * this.width;
  };
  this.perimeter = function() {
    return 2 * (this.height + this.width);
  };
}

let testRect = new Rectangle(2, 2);
console.log(testRect.area());
console.log(testRect.perimeter());

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distance = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  this.distanceFrom = function(another) {
    return Math.sqrt(
      (this.x - another.x) * (this.x - another.x) +
        (this.y - another.y) * (this.y - another.y)
    );
  };
}

console.log(new Point(2, 2).distance());
console.log(new Point(2, 2).distanceFrom(new Point(3, 3)));

function isPalindrome(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
}

console.log(isPalindrome("owthwo"));

function checkPalindrome() {
  return (
    this.split("")
      .reverse()
      .join("")
      .valueOf() === this.valueOf()
  );
  // with a == operator we don't need to use the valueOf method.
  // WHY?? Check the type of this.split('').reverse().join('')
  //   return (
  //     this.split("")
  //       .reverse()
  //       .join("") == this
  //   );
}
// console.log(checkPalindrome("ooooo"));
