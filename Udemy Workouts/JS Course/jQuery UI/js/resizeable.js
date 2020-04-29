$(document).ready(function () {
  $(".resizeable").resizable({
    // animate: true,
    // animateDuration: 200,
    aspectRatio: true,
    containment: ".block",
    // ghost: true,
    grid: [56, 56],
    maxHeight: 200,
    maxWidth: 200,
  });
});
