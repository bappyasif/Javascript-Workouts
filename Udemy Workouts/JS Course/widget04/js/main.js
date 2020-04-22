let awesomeQuiz = {
  settings: {
    results: [],
    resultHTML: [],
  },

  loadQuiz: function () {
    // console.log("Quiz Loaded");
    $(".panel_one h1").show("drop", "290", function () {
      $(".start_quiz").addClass("started", "290");
    });

    $(".start_quiz").on("click", function () {
      awesomeQuiz.showPanel(1);
      awesomeQuiz.nextQuestion();
    });
  },

  showPanel: function (panel) {
    let currentPanel = $(`div[data-panel=${panel - 1}]`);
    currentPanel
      .find(".wrapper")
      .animate({ left: "-=100px", opacity: 0 }, 290, function () {
        currentPanel.addClass("hidden");
        // Show Next
        let nextPanel = $(`div[data-panel=${panel}]`);
        nextPanel.removeClass("hidden");
        awesomeQuiz.showWrapper(nextPanel);
      });
  },

  showWrapper: function (next) {
    let wrapper = next.find(".wrapper");
    wrapper.fadeIn("290", function () {
      awesomeQuiz.manageOptions(next);
    });
  },

  manageOptions: function (panel) {
    let options = panel.find(".options");
    let childrens = options.find("div");
    // console.log(childrens);
    let delayCounter = 0;
    childrens.each(function (idx, el) {
      //   console.log(idx, el);
      //   $(el).fadeIn("290");
      $(el).delay(delayCounter).fadeIn("290");
      delayCounter += 220;
    });

    childrens.click(function () {
      childrens.removeClass("active");
      //   $(this).addClass("active");
      panel.addClass("valid");
      $(this).addClass("active");
    });
  },

  nextQuestion: function () {
    $(".next_question").on("click", function () {
      if (awesomeQuiz.validateSelection($(this))) {
        let next = $(this).data("next");
        awesomeQuiz.showPanel(next);
        awesomeQuiz.showProgressAndStore(next);
      }
    });
  },

  validateSelection: function (section) {
    let previousContainer = section.parents().eq("1");
    // console.log(previousContainer);
    if (previousContainer.hasClass("valid")) {
      return true;
    } else {
      $(".error").fadeIn("290", function () {
        $(this).delay(800).fadeOut("220");
      });
      return false;
    }
  },

  showProgressAndStore: function (panel) {
    $(".progress .bar").animate({ width: "+=25%" }, "290");

    let options = $(`div[data-panel=${panel - 1}]`).find(".options");
    // console.log(options);
    options.find("div").each(function (idx, el) {
      if ($(this).hasClass("active")) {
        awesomeQuiz.settings.results.push($(this).text());
        console.log(awesomeQuiz.settings.results);
        if ($(this).text() !== "Results") {
          awesomeQuiz.settings.resultHTML.push(`<li>${$(this).text()}</li>`);
        }
      }
    });
    awesomeQuiz.displayResult();
  },

  displayResult: function () {
    // $(".selections").text(awesomeQuiz.settings.results);
    // $(".selections").append(`<p>${awesomeQuiz.settings.results}</p>`);
    $(".selections").html(`<ul><li>${awesomeQuiz.settings.results}</li></ul>`);
    // for (let i = 0; i < awesomeQuiz.settings.results.length; i++) {
    //   $(".selections").html(`<li>${awesomeQuiz.settings.results[i]}</li>`);
    // }

    $(".selections").html(`<ul>${awesomeQuiz.settings.resultHTML}</ul>`);
  },
};

$(document).ready(function () {
  awesomeQuiz.loadQuiz();
});
