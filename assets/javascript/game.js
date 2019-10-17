 $(document).ready(function() {
     
  //generate random number to match
  var randomNumber = Math.floor((Math.random() *101) + 19);

     //Each crsytal generate a hidden random number 
     var crystal1 = Math.floor(Math.random() * 12) +1;
     var crystal2 = Math.floor(Math.random() * 12) +1;
     var crystal3 = Math.floor(Math.random() * 12) +1;
     var crystal4 = Math.floor(Math.random() * 12) +1;
      console.log(crystal1);        
      console.log(crystal2);
      console.log(crystal3);
      console.log(crystal4);
    
      //Variables to track the wins, losses and total score
      var wins = 0;
      var losses = 0;
      var playerScore = 0;

      //Update the total scores,wins and losses
      var updatedScore = function() {
               $(".wins").empty();
               $(".wins").append(wins);

               $(".losses").empty();
               $(".losses").append(losses);

               $(".playerScore").empty();
               $(".playerScore").append(playerScore);

               $(".randomNumber").empty();
               $(".randomNumber").append(randomNumber);
            
         }
      
       var restartGame = function() {
         playerScore = 0;
         
        randomNumber = Math.floor((Math.random() * 101) + 19);
        
          crystal1 = Math.floor(Math.random() * 12) + 1;
          crystal2 = Math.floor(Math.random() * 12) + 1;
          crystal3 = Math.floor(Math.random() * 12) + 1;
          crystal4 = Math.floor(Math.random() * 12) + 1;
          totalScore = 0;
          
          updatedScore();
      
      }
      
     //Conditional statements
         var config = function() {
           
          if (playerScore === randomNumber) {
             wins = wins +1;
             alert("You win!")
             restartGame();
            }
             else if (playerScore > randomNumber) {
               losses = losses +1;
               alert("You lost!")
               restartGame();
            }
            else {
              updatedScore();
            }
        }

       //Final results
       $(".randomNumber").append(randomNumber);
       $(".playerScore").append(playerScore);
 

     //Creating function for all crystals to add the total score matches
     //to random number once the player click the crystal
     $("#crystal1").on("click", function() {
       playerScore = playerScore + crystal1;
       $(".playerScore").text(playerScore);
       config();
     })

     $("#crystal2").on("click", function() {
      playerScore = playerScore + crystal2;
      $(".playerScore").text(playerScore);
      config();
    })


     $("#crystal3").on("click", function() {
       playerScore = playerScore + crystal3;
       $(".playerScore").text(playerScore);
       config();
     })

     $("#crystal4").on("click", function() {
      playerScore = playerScore + crystal4;
      $(".playerScore").text(playerScore);
      config();
    })

  
  
});























