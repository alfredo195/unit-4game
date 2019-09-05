$(document).ready(function() {
  //generate random number to guess
  var random = Math.floor(Math.random() * 102 + 19);

  // display of radom number

  $("#scoreToMatch").text(random);

  //random number for crystals
  var num1 = Math.floor(Math.random() * 12 + 1);
  var num2 = Math.floor(Math.random() * 12 + 1);
  var num3 = Math.floor(Math.random() * 12 + 1);
  var num4 = Math.floor(Math.random() * 12 + 1);

  //var to track win, losses, total

  var wins = 0;
  var losses = 0;
  var playerTotal = 0;

  $("#wins").html(wins);
  $("#losses").html(losses);

  // restart game

  function reset() {
    random = Math.floor(Math.random() * 102 + 19);
    $("#scoreToMatch").text(random);
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    playerTotal = 0;
    $("score").html(playerTotal);
  }
  // display win
  function winner() {
    alert("You Win !");
    wins++;
    $("#wins").html(wins);
    reset();
  }

  // display losses
  function loser() {
    alert("You Lose !");
    losses++;
    $("losses").html(losses);
    reset();
  }
  // reactions to clicking on crystals
  $(".purp").on("click", function() {
    playerTotal = playerTotal + num1;
    $("#userPoints").html(playerTotal);

    if (playerTotal == random) {
      winner();
    } else if (playerTotal > random) {
      loser();
    }
  });

  $(".yellow").on("click", function() {
    playerTotal = playerTotal + num1;
    $("#userPoints").html(playerTotal);

    if (playerTotal == random) {
      winner();
    } else if (playerTotal > random) {
      loser();
    }
  });

  $(".red").on("click", function() {
    playerTotal = playerTotal + num1;
    $("#userPoints").html(playerTotal);

    if (playerTotal == random) {
      winner();
    } else if (playerTotal > random) {
      loser();
    }
  });

  $(".blue").on("click", function() {
    playerTotal = playerTotal + num1;
    $("#userPoints").html(playerTotal);

    if (playerTotal == random) {
      winner();
    } else if (playerTotal > random) {
      loser();
    }
  });
});
