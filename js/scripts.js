function Player1(player) {
  this.playerName = player;
  this.score = 0;
};

function Player2(player) {
  this.playerName = player;
  this.score = 0;
};

var diceRoll = function() {
   return Math.floor((Math.random() * 6) + 1);
 };
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
