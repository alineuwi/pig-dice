var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function dieRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}

var playerRoll = function() {
  var roll = dieRoll();
  if(roll ===1){
    pigGame.turnScore = 0;
    notifyEndTurn();
    switchPlayer();
  } else {
    pigGame.turnScore +=roll;
    if (pigGame.playerUp === 1) {
      if (pigGame.turnScore + pigGame.player1Score >= 50) {
        alertWinner(1);
      }
    } else if (pigGame.turnScore + pigGame.player2Score >= 50) {
      alertWinner(2);
  }
  }
  return roll;
}





function Player1(player) {
  this.playerName = player;
  this.score = 0;
};

function Player2(player) {
  this.playerName = player;
  this.score = 0;
};
var diceNumberTemp = ("");

// function rollDice(){
//     var die1 = document.getElementById("die1");
//
//     var status = document.getElementById("status");
//     var d1 = Math.floor(Math.random() * 6) + 1;
//
//     var diceTotal = d1;
//     die1.innerHTML = d1;
//
//     status.innerHTML = "You rolled "+diceTotal+".";
//
//     diceNumberTemp.concat(d1);
// }

// function diceNumberTemp(index) {
//   if (index=== 1){
//     alert("your turn is over");
//   }else{
//     alert("plese roll again");
//   }
// };
// alert(diceNumberTemp);
// //
//  Player.prototype.increaseScore = function(diceRoll) {
//    this.score += diceRoll;
// };



$(document).ready(function() {
  $("#pigForm").submit(function(event) {
      event.preventDefault();

      var playerName1 = $("input#playerName1").val();
      var playerName2 = $("input#playerName2").val();


    var nameHolder1 = new Player1(playerName1);
    var nameHolder2 = new Player2(playerName2);


  });
});
