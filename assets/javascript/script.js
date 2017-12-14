$(document).ready(function() {
//global variables
  var gemNumbersArr = [];
  var gemNumbers;
  var targetNumber;
  var result;
  var wins = 0;
  var losses = 0;

  function start() {
    gemNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    targetNumber;
    result = 0;

//randomize number
    do {
      var random = Math.random();
      targetNumber = Math.round(random * 120);
    } while (random < 0.155)

    $("#randonum").text(targetNumber);
    $("#result").text(result);

//assign each gem a randomized value, value is reset when restarting the game
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
      $("#scores").text("You Win!");
      $("#wins").text(wins);
    }
    else if (result > targetNumber) {
      losses++;
      $("#scores").text("You Loose!");
      $("#losses").text(losses);
    }
    else {
      return;
    }
    start();
  }

//calculate total scores
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

  //Call function start to set the variables
  start();

});
