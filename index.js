var randomLevel = [];
var firstTime = true;
var i = 0;
$("body").keydown(function (e) {
  if (firstTime) {
    randomNumber();
    $("h1").text("Level " + randomLevel.length);

    $("." + getColor(randomLevel.length - 1)).addClass("pressed");
    switchSound(getColor(randomLevel.length - 1));
    setTimeout(() => {
      $("." + getColor(randomLevel.length - 1)).removeClass("pressed");
    }, 100);
  }
  firstTime = false;

});
$(".btn").click(function (e) {
    if (getColor(i) === this.id) {
      $(this).addClass("pressed");
      switchSound(this.id);
      setTimeout(() => {
        $(this).removeClass("pressed");
      }, 100);
      i++;
      if (i == randomLevel.length) {
        randomNumber();
        setTimeout(() => {
          clickEffect(i);
          i = 0;
          $("h1").text("Level " + randomLevel.length);
        }, 1000);
      } else {
        //gameOver();
      }
    } else {
      gameOver();
    }
  });

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  var wrong = new Audio("./sounds/wrong.mp3");
  wrong.play();
  i = 0;
  randomLevel = [];
  firstTime = true;
}

function clickEffect(i) {
  $("." + getColor(i)).addClass("pressed");
  switchSound(getColor(i));
  setTimeout(() => {
    $("." + getColor(i)).removeClass("pressed");
  }, 100);
}
function switchSound(deneme) {
  switch (deneme) {
    case "blue":
      var blue = new Audio("./sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("./sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("./sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("./sounds/yellow.mp3");
      yellow.play();
      break;
    default:
      break;
  }
}
function randomNumber() {
  var random = Math.floor(Math.random() * 4) + 1;
  randomLevel.push(random);
}
function getColor(i) {
  switch (randomLevel[i]) {
    case 1:
      return "blue";
      break;
    case 2:
      return "green";
      break;
    case 3:
      return "red";
      break;
    case 4:
      return "yellow";
      break;
    default:
      break;
  }
}
