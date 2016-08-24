function Player1(player) {
  this.playerName = player;
  this.score = 0;
};

function Player2(player) {
  this.playerName = player;
  this.score = 0;
};

function rollDice(){
    var die1 = document.getElementById("die1");

    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;

    var diceTotal = d1;
    die1.innerHTML = d1;

    status.innerHTML = "You rolled "+diceTotal+".";
}
//
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
