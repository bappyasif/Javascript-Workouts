let awesomeQuiz = {
  settings: {
    results: [],
  },

  loadQuiz: function () {
    // console.log("Load Quiz");
    $(".panel_one h1").show("drop", "470", function () {
      $(".start_quiz").addClass("started", "560");
    });

    $(".start_quiz").on("click", function () {
      awesomeQuiz.showPanel(1);
      awesomeQuiz.listenNext();
    });
  },

  showPanel: function (panel) {
    let currentPanel = $(`div[data-panel=${panel - 1}]`);
    currentPanel
      .find(".wrapper")
      .animate({ left: "-=100px", opacity: 0 }, 650, function () {
        currentPanel.addClass("hidden");
        // Show Next
        let nextPanel = $(`div[data-panel=${panel}]`);
        nextPanel.removeClass("hidden");
        awesomeQuiz.showWrapper(nextPanel);
      });
  },

  showWrapper: function (next) {
    let wrapper = next.find(".wrapper");
    wrapper.fadeIn("380", function () {
      awesomeQuiz.manageOptions(next);
    });
  },

  manageOptions: function (panel) {
    let options = panel.find(".options");
    let childrens = options.find("div");
    // console.log(childrens);
    let counter = 0;
    childrens.each(function (idx, el) {
      //   console.log(idx, el);
      //   $(el).fadeIn("290");
      $(el).delay(counter).fadeIn("290");
      counter += 200;
    });

    childrens.on("click", function () {
      childrens.removeClass("active");
      panel.addClass("valid");
      $(this).addClass("active");
    });
  },

  listenNext: function () {
    $(".next_question").on("click", function () {
      if (awesomeQuiz.validateSection($(this))) {
        let next = $(this).data("next");
        awesomeQuiz.showPanel(next);
        awesomeQuiz.showwProgressAndStore(next);
      }
    });
  },

  validateSection: function (section) {
    let parent = section.parents().eq("1");
    // console.log(parent);
    if (parent.hasClass("valid")) {
      return true;
    } else {
      $(".error").fadeIn("290", function () {
        $(this).delay("290").fadeOut("290");
      });
      return false;
    }
  },

  showwProgressAndStore: function (panel) {
    $(".progress .bar").animate({ width: "+=25%" }, 380);
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
