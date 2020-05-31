var user_score = 0;
var comp_score = 0;
var user_span = document.getElementById("userscore");
var comp_span = document.getElementById("compscore");
var result_p = document.getElementById("result");
var rock_img = document.getElementById("rock");
var paper_img = document.getElementById("paper");
var scissors_img = document.getElementById("scissors");
var scoreboard = document.querySelector(".scoreboard");
var button = document.getElementById("button");
function getcomputerchoice() {
  var choices = ["r", "p", "s"];
  var random = Math.floor(Math.random() * 3);
  return choices[random];
}
function convert(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  if (letter == "s") return "Scissors";
}
function wins(userchoice, computerchoice) {
  user_score++;
  user_span.innerHTML = user_score;
  comp_span.innerHTML = comp_score;
  var small = "user".fontsize(3).sup();
  var big = "computer".fontsize(3).sup();
  result_p.innerHTML =
    convert(userchoice) +
    small +
    " beats " +
    convert(computerchoice) +
    big +
    " . You win! ";
 
}
function lose(userchoice, computerchoice) {
  comp_score++;
  user_span.innerHTML = user_score;
  comp_span.innerHTML = comp_score;
  var small = "user".fontsize(3).sup();
  var big = "computer".fontsize(3).sup();
  result_p.innerHTML =
    convert(computerchoice) +
    big +
    " beats " +
    convert(userchoice) +
    small +
    " . You lose !";
 
}
function draw(userchoice, computerchoice) {
  user_span.innerHTML = user_score;
  comp_span.innerHTML = comp_score;
  var small = "user".fontsize(3).sup();
  var big = "computer".fontsize(3).sup();
  result_p.innerHTML =
    convert(userchoice) +
    small +
    " draw " +
    convert(computerchoice) +
    big +
    " . It's a tie ! ";
 
}
function game(userchoice) {
  var computerchoice = getcomputerchoice();
  if (userchoice == computerchoice) {
    draw(userchoice, computerchoice);
  } else if (userchoice == "r" && computerchoice == "s") {
    wins(userchoice, computerchoice);
  } else if (userchoice == "p" && computerchoice == "r") {
    wins(userchoice, computerchoice);
  } else if (userchoice == "s" && computerchoice == "p") {
    wins(userchoice, computerchoice);
  } else if (userchoice == "s" && computerchoice == "r") {
    lose(userchoice, computerchoice);
  } else if (userchoice == "r" && computerchoice == "p") {
    lose(userchoice, computerchoice);
  } else if (userchoice == "p" && computerchoice == "s") {
    lose(userchoice, computerchoice);
  }
}
function reset() {
  user_score = 0;
  comp_score = 0;
  user_span.innerHTML = 0;
  comp_span.innerHTML = 0;
}
function main() {
  rock_img.addEventListener("click", function () {
    game("r");
  });
  paper_img.addEventListener("click", function () {
    game("p");
  });
  scissors_img.addEventListener("click", function () {
    game("s");
  });
  button.addEventListener("click", function () {
    reset();
  });
}
main();
