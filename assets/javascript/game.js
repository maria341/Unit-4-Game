 
 var wins = 0;
 var losses = 0;
 var playerScore = 0;
 
  
   //Generate random number to match
    var randomNumber = Math.floor((Math.random() * 101) + 19);
    
      //generate new hidden random number each crystal  
      var crystal1 = Math.floor((Math.random() * 12) + 1);
      var crystal2 = Math.floor((Math.random() * 12) + 1);
      var crystal3 = Math.floor((Math.random() * 12) + 1);
      var crystal4 = Math.floor((Math.random() * 12) + 1);
      console.log(crystal1);        
      console.log(crystal2);
      console.log(crystal3);
      console.log(crystal4);
      
//Update the total scores,wins and losses
var updatedScore = function() {
  $(".wins").empty();
  $(".wins").append(wins);

  $(".losses").empty();
  $(".losses").append(losses);

  $(".playerScore").empty();
  $(".playerScore").append(playerScore);
}

//=======================================================
var restartGame = function() {
    playerScore = 0;
  
     randomNumber = Math.floor((Math.random() * 101) + 19);

    $(".randomNumber").empty();
    $(".randomNumber").append(randomNumber);
      
       crystal1 = Math.floor((Math.random() * 12) + 1);
       crystal2 = Math.floor((Math.random() * 12) + 1);
       crystal3 = Math.floor((Math.random() * 12) + 1);
       crystal4 = Math.floor((Math.random() * 12) + 1);

      updatedScore();

}

//
var config = function() {
     if (playerScore === randomNumber) {
           alert("You win");
           wins = wins + 1;
           restartGame();
        }
         else if (playerScore > randomNumber) {
           alert("You lose!");
           losses = losses + 1;
           restartGame();
        }
        else {
          updatedScore();
        }
   }

   //Final results
   $(".randomNumber").append(randomNumber);
   $(".playerScore").append(playerScore);

   //adding the total score if the player click each crystal
   $(document).ready(function () {
    
    $("#crystal1").click(function() {
        playerScore = playerScore + crystal1;
        $(".playerScore").text(playerScore);
        config();

  })

   $("#crystal2").click(function() {
      playerScore = playerScore + crystal2;
     $(".playerScore").text(playerScore);
      config();

 })

  $("#crystal3").click(function() {
     playerScore = playerScore + crystal3;
     $(".playerScore").text(playerScore);
    config();

  })

  $("#crystal4").click(function() {
     playerScore = playerScore + crystal4;
     $(".playerScore").text(playerScore);
     config();

  }) 
   

});


























