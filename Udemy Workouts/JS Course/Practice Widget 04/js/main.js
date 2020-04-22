let awesomeQuiz = {
  settings: {
    results: [],
  },

  loadQuiz: function () {
    console.log("Start Quizz");
    $(".panel_one h1").show("drop", "470", function () {
      $(".start_quiz").addClass("started", "470");
    });

    $(".start_quiz").on("click", function () {
      awesomeQuiz.showPanel(1);
      awesomeQuiz.nextButton();
    });
  },

  showPanel: function (position) {
    let current = $(`div[data-panel=${position - 1}]`);
    current
      .find(".wrapper")
      .animate({ left: "-=100px", opacity: 0 }, 490, function () {
        current.addClass("hidden");

        // Show Next
        let next = $(`div[data-panel=${position}]`);
        next.removeClass("hidden");
        awesomeQuiz.showWrapper(next);
      });
  },

  showWrapper: function (panel) {
    let wrapper = panel.find(".wrapper");
    wrapper.fadeIn("580", function () {
      awesomeQuiz.manageOptions(panel);
    });
  },

  manageOptions: function (panel) {
    let options = panel.find(".options");
    let childrens = options.find("div");
    // console.log(childrens);
    let counter = 0;
    childrens.each(function (idx, el) {
      // console.log(idx, el);
      // $(el).fadeIn("300");
      $(el).delay(counter).fadeIn("300");
      counter += 560;
    });

    childrens.on("click", function () {
      childrens.removeClass("active");
      panel.addClass("valid");
      $(this).addClass("active");
    });
  },

  nextButton: function () {
    $(".next_question").on("click", function () {
      if (awesomeQuiz.validatePanel($(this))) {
        let next = $(this).data("next");
        awesomeQuiz.showPanel(next);
        awesomeQuiz.showProgressAndStore(next);
      }
    });
  },

  validatePanel: function ($this) {
    let parentNode = $this.parents().eq(1);
    console.log(parentNode);
    if (parentNode.hasClass("valid")) {
      return true;
    } else {
      $(".error").fadeIn("400", function () {
        $(this).delay(2000).fadeOut(400);
      });
      return false;
    }
  },

  showProgressAndStore: function (panel) {
    $(".progress .bar").animate({ width: "+=25%" }, 560);
    let options = $(`div[data-panel=${panel - 1}]`).find(".options");
    // console.log(options);
    options.find("div").each(function (idx, el) {
      if ($(this).hasClass("active")) {
        awesomeQuiz.settings.results.push($(this).text());
        console.log(awesomeQuiz.settings.results);
      }
    });
  },
};

$(document).ready(function () {
  awesomeQuiz.loadQuiz();
});
