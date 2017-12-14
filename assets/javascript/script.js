$(document).ready(function() {

  //Create global variables
  var gemNumbersArr = [];
  var gemNumbers;
  var targetNumber;
  var result;
  var wins = 0;
  var losses = 0;

  function initializeData() {
    gemNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    targetNumber;
    result = 0;

    // Get a random number between 19-120 at the start of the game
    do {
      var random = Math.random();
      targetNumber = Math.round(random * 120);
    } while (random < 0.155)

    $("#randonum").text(targetNumber);
    $("#result").text(result);

    // Assign score to each crystal, score is reset when restarting the game
    gemNumbers = $("#gem-numbers");
    jQuery.data(gemNumbers, "gems", {
      rubyNumber: gemNumbersArr[Math.floor(Math.random() * gemNumbersArr.length)],
      opalNumber: gemNumbersArr[Math.floor(Math.random() * gemNumbersArr.length)],
      diamondNumber: gemNumbersArr[Math.floor(Math.random() * gemNumbersArr.length)],
      emeraldNumber: gemNumbersArr[Math.floor(Math.random() * gemNumbersArr.length)]
    });
    console.log(jQuery.data(gemNumbers, "gems").rubyNumber);
    console.log(jQuery.data(gemNumbers, "gems").opalNumber);
    console.log(jQuery.data(gemNumbers, "gems").diamondNumber);
    console.log(jQuery.data(gemNumbers, "gems").emeraldNumber);
    console.log("----");
  }

  function checkScores() {
    if (result === targetNumber) {
      wins++;
      $("#scores").text("You won!!!");
      $("#wins").text(wins);
    }
    else if (result > targetNumber) {
      losses++;
      $("#scores").text("You lost!!!");
      $("#losses").text(losses);
    }
    else {
      return;
    }
    initializeData();
  }

  // Calculate total scores
  $("#ruby").on("click", function() {
    result += jQuery.data(gemNumbers, "gems").rubyNumber;
    $("#result").text(result);
    checkScores();
  });

  $("#opal").on("click", function() {
    result += jQuery.data(gemNumbers, "gems").opalNumber;
    $("#result").text(result);
    checkScores();
  });

  $("#diamond").on("click", function() {
    result += jQuery.data(gemNumbers, "gems").diamondNumber;
    $("#result").text(result);
    checkScores();
  });

  $("#emerald").on("click", function() {
    result += jQuery.data(gemNumbers, "gems").emeraldNumber;
    $("#result").text(result);
    checkScores();
  });

  //Call function initializeData to set the variables
  initializeData();

});
