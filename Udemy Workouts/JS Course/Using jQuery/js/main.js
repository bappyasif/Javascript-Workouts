console.log($);
console.log($(".hello"));

// Making Sure Scripts Loadded Before Executing Code.
$(document).ready(function () {
  let hello = $(".hello");
  console.log(hello);
});

$(function () {
  let hello = $(".hello");
  console.log(hello);
});

$(document).ready(function () {
  console.log($("p"));
  console.log($("ul"));
  console.log($("form"));
});

$(function () {
  $("ul, p, form").css("fontSize", "40px");
});

$(document).ready(function () {
  $(".text").css("color", "cyan");
  $(".list").css("color", "teal");
});

$(function () {
  $("input[type='text']").css("color", "Coral");
  $("input[type='text']").css("background", "khaki");

  $("input:text").css("background", "khaki");
  $("input:radio").css("margin-left", "20px");
  // $("input:email").css("margin", "30px"); // Unsupported Type
  $("input[type='email']").css("background", "khaki");
  $("input[type='email']").css("color", "Coral");

  $("input:checked").css("margin-left", "40px");
  // $("input:checked").css("color", "teal");
});

$(document).ready(function () {
  $("li:first").css("background", "khaki");
  $("li:last").css("background", "khaki");

  // $("li:even").css("background", "khaki");
  $("li:odd").css("background", "khaki");

  $("ul.text li").first().css("color", "blue");
  $("ul.text li").last().prev().css("color", "blue");
});

$(function () {
  $("tr:odd").css("background", "khaki");
  $("tr:even").css("color", "maroon");
});

$(document).ready(function () {
  $(".list").css("color", "magenta");
  $(".list:first li:first").css("color", "teal");

  $(".list li:first-child").css("fontSize", "49px");
  $(".list li:first-of-type").css("color", "teal");

  $(".list li:last-child").css("fontSize", "49px");
  $(".list li:last-of-type").css("color", "teal");

  $(".list li:nth-child(2)").css("fontWeight", "bolder");
  $(".list li:nth-last-child(2)").css("fontWeight", "bold");
});

$(function () {
  $(".container").css("background", "midnightBlue");
  $(".container div").css("background", "blue");

  $(".container").find("div").css("fontSize", "38px");
  $(".container").find("span").css("fontSize", "29px");

  $(".container").find(".title").css("color", "yellow");
  $(".container").find("#other").css("color", "greenYellow");

  $(".container").find("#other").css("border", "solid 1.1px cyan");
  $(".container").find(".title").css("border", "double 1.1px cyan");

  $(".container").children("div").css("textAlign", "center");
  $(".container").children("div").css("fontStyle", "Oblique");
});

$(document).ready(function () {
  $(".user").parent().css("textAlign", "center");
  $(".hobbies").parent().css("fontSize", "47px");

  // $(".hobbies").parents().css("background", "greenYellow");
  $(".hobbies").parents(".baseContainer").css("background", "greenYellow");

  let hobbCont = $(".hobbies").parent();
  hobbCont.css("border", "dotted 2.2px maroon");

  let baseHobb = $(".hobbies").parents(".baseContainer");
  console.log(baseHobb);
  baseHobb.css("fontStyle", "Oblique");
  baseHobb.css("border", "dashed 4.4px darkRed");
});

$(function () {
  $(".second").prev().css("fontSize", "48px");
  $(".second").next().css("fontSize", "48px");

  $(".third").prev().css("fontSize", "48px");
  $(".third").next().css("fontSize", "48px");

  $(".second").prev().css("textAlign", "center");
  $(".second").next().css("textAlign", "center");

  $(".third").prev().css("textAlign", "center");
  $(".third").next().css("textAlign", "center");
});

$(document).ready(function () {
  $(".bContainer .list li").css("background", "inherit");
  $(".bContainer .list li").css("color", "Coral");

  $(".bContainer .list li:eq(1)").css("color", "black");
  $(".bContainer .list li:eq(1)").css("background", "red");

  // $(".bContainer .list").parents().css("background", "darkRed");
  $(".bContainer .list").parent().css("background", "darkRed");

  $(".bContainer .list").parents().eq(1).css("background", "darkRed");
  // $(".bContainer .list").parents().eq(2).css("background", "darkRed");
});

$(function () {
  $(".pContainer div").css("background", "darkRed");
  $(".pContainer div").css("color", "red");

  $(".pContainer div").last().css("color", "darkRed");
  $(".pContainer div").last().css("background", "red");

  $(".pContainer div p").last().css("fontSize", "56px");
  $(".pContainer div p").first().css("fontSize", "56px");

  // $(".pContainer div p").not(".different").css("fontWeight", "initial");
  // $(".pContainer div").not(".different").css("fontStyle", "oblique");

  // $(".pContainer div p").not(".unchanged").css("fontWeight", "initial");
  // $(".pContainer div").not(".unchanged").css("fontStyle", "oblique");
});

$(document).ready(function () {
  $(".pContainer div:eq(0)").css("fontSize", "56px");
  $(".pContainer div p:eq(6)").css("fontSize", "56px");

  $(".pContainer div").last().eq(0).css("color", "blue");
  $(".pContainer div").first().eq(0).css("color", "blue");
});

$(function () {
  $(".pContainer div").not(".different, .unchanged").css("background", "teal");
  $(".pContainer div").not(".different, .unchanged").css("color", "coral");

  $(".pContainer div")
    .not(".different, .unchanged")
    .css("fontStyle", "oblique");
  $(".pContainer div")
    .not(".different, .unchanged")
    .css("fontWeight", "lighter");
});

$(document).ready(function () {
  $(".pContainer div").filter(".different").css("background", "magenta");
  $(".pContainer div").filter(".unchanged").css("background", "magenta");

  $(".pContainer div").filter(".different").css("textAlign", "center");
  $(".pContainer div").filter(".unchanged").css("textAlign", "center");
});

$(function () {
  $(".pContainer").append(`<div class="changeIt">
  <p>Added Paragarph</p>
  <p>Another Paragraph</p>
  </div>`);

  $(`<div class="changeIt">
  <p>Added Paragarph</p>
  <p>Another Paragraph</p>
  </div>`).appendTo($(".pContainer"));
});

$(document).ready(function () {
  $(".pContainer").prepend(`<div class="changeThis">
  <p>Added Paragarph</p>
  <p>Another Paragraph</p>
  </div>`);

  $(`<div class="changeThis">
  <p>Added Paragarph</p>
  <p>Another Paragraph</p>
  </div>`).prependTo($(".pContainer"));
});

$(function () {
  $(".pContainer").before(`<div class="changeIt">Added Before</div>`);
  $(".pContainer").after(`<div class="changeIt">Added After</div>`);

  // $(".changeIt").replaceWith("Replaced");
  // $("").replaceAll(".changeIt, .changeThis");

  $(".changeIt:eq(0)").remove();
  $(".changeIt").remove();

  $(".pContainer div").filter(".changeIt").remove();
  $(".pContainer div").filter(".changeThis").remove();
});

$(document).ready(function () {
  console.log($("a").text());
  $("a").text("Click Here!!");
  console.log($("a").text());
  console.log($("a").attr("href"));
  $("a").attr("href", "https://udemy.com");
  console.log($("a").attr("href"));
  console.log($("a").attr("style"));
  $("a").attr("style", "color:aqua");
  console.log($("a").attr("style"));
  console.log($("a").attr("custom"));
  $("a").attr("custom", "newText");
  console.log($("a").attr("custom"));
});

$(function () {
  console.log($("input").attr("value"));
  console.log($("input").val());
  console.log($("input:radio").prop("checked"));
  $("input:radio").prop("checked", false);
  console.log($("input:radio").prop("checked"));
  console.log($("input[name='No']").prop("checked"));
  $("input[name='No']").prop("checked", true);
  console.log($("input[name='No']").prop("checked"));
});

$(document).ready(function () {
  let classes = $(".element").attr("class");
  console.log(classes);
  console.log($(".element").hasClass("anotherClass"));
  if ($(".element").hasClass("anotherClass")) {
    $(".element").append(`<div>Move Forward</div>`);
  } else {
    $(".element").append(`<div>Go Back</div>`);
  }
  $(".element").addClass("active");
  console.log($(".element").attr("class"));
  $(".element").removeClass("active");
  console.log($(".element").attr("class"));
  $(".element").addClass("inactive");
  $(".element").removeClass("inactive").addClass("active");
  console.log($(".element").attr("class"));
  $(".element").toggleClass("active");
  console.log($(".element").attr("class"));
  $(".element").toggleClass("active");
  console.log($(".element").attr("class"));
  $(".element").toggleClass("active inactive");
  console.log($(".element").attr("class"));
  $(".element").toggleClass("active inactive");
  console.log($(".element").attr("class"));
});

$(function () {
  let element = $(".element");
  console.log(element.css("fontSize"));
  console.log(element.css("width"));
  console.log(element.width());
  console.log(element.height());
  element.css("background", "darkRed");
  element.css("color", "black");
  element.css("width", "+=50px");
  element.css("height", "+=50px");
  element.css({
    background: "darkRed",
    color: "green",
  });
});

$(document).ready(function () {
  console.log($(".element").data("name"));
  console.log($(".element").data("hobbies"));
  console.log($(".element").data("hobbies").split(","));
  console.log($(".element").data());
  let element = $(".element").data();
  console.log(element.name);
  console.log(element.hobbies);
  let cars = ["Tesla", "Chevy", "Ford", "BMW"];
  $(".element").data("cars", cars);
  console.log($(".element").data());
  console.log(element.cars);
});

$(function () {
  $(".element").click(function (event) {
    console.log("Got Clicked!!");
  });
  $(".element").on("click mouseover mouseleave", function (event) {
    console.log("Got Clicked");
  });
  $("body").on("click mouseover mouseleave", ".element", function (event) {
    console.log("Got! Clicked!");
  });
  $(".element").mouseenter(function (event) {
    console.log("Mouse Enter");
  });
  $(".element").mouseleave(function (event) {
    console.log("Mouse Leave");
  });
  $(".element").hover(
    function (event) {
      console.log("Mouse Enter!");
    },
    function (event) {
      console.log("Mouse Leave!");
    }
  );
  $(".element").mousedown(function (event) {
    console.log("Mouse Down");
  });
  $(".element").mouseup(function (event) {
    console.log("Mouse Up");
  });
  $(".element").mousemove(function (event) {
    console.log("Mouse Moving");
  });
  $(".element").click(function (event) {
    let pageCoords = `(X :: ${event.pageX}, Y:: ${event.pageY})`;
    console.log(pageCoords);
  });
});

$(document).ready(function () {
  $(document).keydown(function (event) {
    console.log("Key Pressed : ");
    console.log(event.which);
    let down = 40;
    let right = 39;
    let up = 38;
    let left = 37;
    if (event.which === down) {
      $(".anotherElement").css({ top: "+=200px" });
    } else if (event.which === right) {
      $(".anotherElement").css({ left: "+=20px" });
    } else if (event.which === up) {
      $(".anotherElement").css({ top: "-=11px" });
    } else if (event.which === left) {
      $(".anotherElement").css({ left: "-=20px" });
    }
  });

  $(document).keyup(function (event) {
    console.log("Key Realesed : " + event.which);
    if (event.which === 37 || 38 || 39 || 40) {
      $(".anotherElement").css({ top: "0px", left: "0px" });
    }
  });

  $(document).keydown(function (evnt) {
    if (event.which === 37 && 38) {
      $(".anotherElement").remove();
    }
  });
});

$(function () {
  $(document).scroll(function () {
    console.log("Scrolling");
  });
  $(window).resize(function () {
    console.log("Resizing");
  });
});

$(document).ready(function () {
  $(".anotherElement").append(`<div class="block">Added Div</div>`);
  $(".block").click(function (event) {
    console.log("Block Clicked");
  });
  $(document).on("click", ".block1", function (event) {
    console.log("Block Clicked!!");
  });
  $(".anotherElement").append(`<div class="block1">Press Up And Left</div>`);
});

$(function () {
  $("#input").focusin(function (event) {
    console.log("Focus In");
  });
  $("#input").focusout(function (event) {
    console.log("Focus Out");
  });
  $("#input1").blur(function (event) {
    // let value = event.target.value;
    let value = $(this).val();
    console.log(value);
  });
  $("input").blur(function (event) {
    let value = $(this).val();
    if (value.length < 5) {
      $(this).addClass("error");
      $(this).css("background", "crimson");
    } else {
      $(this).removeClass("error");
      $(this).css("background", "inherit");
    }
  });
  $("form").submit(function (event) {
    event.preventDefault();
    console.log("Not Reloading");
  });
  $("input").change(function (event) {
    console.log("Changed");
  });
  $("select").change(function (event) {
    console.log("Changed Select");
  });
  $("select").change(function (event) {
    console.log($(this).val());
  });
  $("input:checkbox").change(function (event) {
    // let element = $(this).val();
    // console.log(element);
    let isChecked = $(this).is(":checked");
    if (isChecked) {
      console.log($(this).val() + " Is : " + isChecked);
    } else {
      console.log($(this).val() + " Is : " + isChecked);
    }
  });
});

$(document).ready(function () {
  // $(".hide").click(function (event) {
  //   $(".elementDiv").hide();
  // });
  // $(".show").click(function (event) {
  //   $(".elementDiv").show();
  // });
  // $(".hide").click(function (event) {
  //   $(".elementDiv").hide("fast");
  // });
  // $(".show").click(function (event) {
  //   $(".elementDiv").show("slow");
  // });
  // $(".hide").click(function (event) {
  //   $(".elementDiv").hide(2000, function () {
  //     console.log("Done Transitioning");
  //   });
  // });
  // $(".show").click(function (event) {
  //   $(".elementDiv").show(2000, function () {
  //     console.log("Done Transitioning");
  //   });
  // });
  $(".hide, .show").click(function () {
    $(".elementDiv").toggle(2000, function () {
      console.log("Done Transitioning");
    });
  });
});

$(function () {
  // $(".fadeIn").click(function () {
  //   $(".elementDiv").fadeIn();
  // });
  // $(".fadeOut").click(function () {
  //   $(".elementDiv").fadeOut();
  // });
  // $(".fadeIn").click(function () {
  //   $(".elementDiv").fadeIn(2000, function () {
  //     console.log("Done Animation");
  //   });
  // });
  // $(".fadeOut").click(function () {
  //   $(".elementDiv").fadeOut(2000, function () {
  //     console.log("Done Animation");
  //   });
  // });
  $(".fadeIn, .fadeOut").click(function () {
    $(".elementDiv").fadeToggle("fast", function () {
      console.log("Done Animation");
    });
  });
  // $(".fadeOut").click(function () {
  //   $(".elementDiv").fadeTo("slow", 0.33, function () {
  //     console.log("Opaque Changed");
  //   });
  // });
});

$(document).ready(function () {
  // $(".slideUp").click(function () {
  //   $(".elementDiv").slideUp(2000, function () {
  //     console.log("Done Sliding");
  //   });
  // });
  // $(".slideDown").click(function () {
  //   $(".elementDiv").slideDown(2000, function () {
  //     console.log("Done Sliding");
  //   });
  // });
  $(".slideUp, .slideDown").click(function () {
    $(".elementDiv").slideToggle("fast", function () {
      console.log("Done Sliding");
    });
  });
});

$(function () {
  // $(".elementDiv").click(function () {
  //   $(this).animate(
  //     {
  //       left: "200px",
  //       top: "50px",
  //       width: "100px",
  //       height: "100px",
  //       fontSize: "30px",
  //       opacity: "0.4",
  //     },
  //     2000
  //   );
  //   // $(this).animate(
  //   //   {
  //   //     left: ["200px", "swing"],
  //   //     top: ["50px", "swing"],
  //   //     width: ["toggle", "swing"],
  //   //     height: ["toggle", "swing"],
  //   //     fontSize: "30px",
  //   //     opacity: "0.4",
  //   //   },
  //   //   2000
  //   // );
  // });
  $(".elementDiv").click(function () {
    $(this).animate(
      {
        left: "200px",
        top: "50px",
        width: "100px",
        height: "100px",
        fontSize: "30px",
        opacity: "0.4",
      },
      2000,
      "easeOutBounce",
      function () {
        console.log("Animation Finished");
      }
    );
  });
  $(".elementDiv").click(function () {
    $(this).animate(
      {
        left: "0px",
        top: "0px",
        width: "50px",
        height: "50px",
        opacity: "0.99",
        fontSize: "16px",
      },
      2000
    );
  });
});

$(document).ready(function () {
  // $(".divElement").hover(
  //   function () {
  //     $(this).animate({ left: "110px" }, "slow");
  //   },
  //   function () {
  //     $(this).animate({ left: "0px" }, "slow");
  //   }
  // );
  $(".divElement").hover(
    function () {
      $(this).stop().animate({ left: "110px" }, "slow");
    },
    function () {
      $(this).stop().animate({ left: "0px" }, "slow");
    }
  );
});

$(function () {
  $(".square.one").animate({ marginLeft: "+=400px" }, 2000, function () {
    $(".square.two").animate({ marginLeft: "+=400px" }, 2000, function () {
      $(".square.three").animate({ marginLeft: "+=400px" }, 2000, function () {
        $(".square.four").animate({ marginLeft: "+=400px" }, 2000, function () {
          console.log("Sequential Animation");
        });
      });
    });
  });
  $(".square.one").animate({ marginLeft: "0px" }, 2000, function () {
    $(".square.two").animate({ marginLeft: "0px" }, 2000, function () {
      $(".square.three").animate({ marginLeft: "0px" }, 2000, function () {
        $(".square.four").animate({ marginLeft: "0px" }, 2000, function () {
          console.log("Sequential Animation");
        });
      });
    });
  });

  $(".square.one").animate({ marginLeft: "+=400px" }, 2000);
  $(".square.two").delay(800).animate({ marginLeft: "+=400px" }, 2000);
  $(".square.three").delay(1000).animate({ marginLeft: "+=400px" }, 2000);
  $(".square.four").delay(1210).animate({ marginLeft: "+=400px" }, 2000);

  $(".square.one").animate({ marginLeft: "0px" }, 2000);
  $(".square.two").delay(800).animate({ marginLeft: "0px" }, 2000);
  $(".square.three").delay(1000).animate({ marginLeft: "0px" }, 2000);
  $(".square.four").delay(1210).animate({ marginLeft: "0px" }, 2000);
});

$(document).ready(function () {
  $.ajax("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    error: function () {
      console.log("Somethings Wrong!!");
    },
    success: function (data) {
      console.log(data);
    },
  });

  // $.ajax({
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   method: "GET",
  // })
  //   .done((data) => console.log(data))
  //   .error(() => console.log("Somethings Wrong!!"));
});

$(function () {
  let method = "POST";
  let url = "https://jsonplaceholder.typicode.com/users";
  let jsonData = { name: "aBappy", lastName: "Sarkar" };
  let stringifyData = JSON.stringify(jsonData);

  // $.ajax(url, {
  //   method: method,
  //   data: stringifyData,
  //   dataType: "json",
  //   contentType: "application/json",
  //   error: function () {
  //     console.log("Somethings Wrong!!");
  //   },
  //   success: function (data) {
  //     console.log(data);
  //   },
  // });

  $.ajax({
    url: url,
    method: method,
    data: stringifyData,
    dataType: "json",
    contentType: "application/json",
  })
    .done((data) => console.log(data))
    .fail(() => console.log("Somethings Wrong!!"));
});
