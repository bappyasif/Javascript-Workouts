(function () {
  // let foo = 1;
  // return foo;
  console.log("howdy y'll");
  let doSomething = () => {
    setTimeout(() => {
      console.log("timed out");
      [1, 2, 3].map((n) => n + 1);
    }, 1100);
    return 5 * 5;
  };
  console.log(doSomething());
})();
