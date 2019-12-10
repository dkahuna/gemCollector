$(document).ready ( function() {

let won = 0;
let lost = 0;
let crystalVal = 0;
let quest = Math.floor(Math.random() * 102 + 19);

//printing the goal of game
$("#goal").text("KARATS: " + quest);


// image values

let diamond = Math.floor(Math.random() * 12) + 1;
$(".blueGem").on("click", function(){
  
 crystalVal = crystalVal + diamond;
  $("#final").text(crystalVal);
  referee ();

});
console.log (diamond);

  let emerald = Math.floor(Math.random() * 12) + 1;
  $(".greenGem").on("click", function(){
    
    crystalVal =  crystalVal + emerald;
    $("#final").text(crystalVal);
    referee ();
 
  });
  // console.log (emerald);

  let opal = Math.floor(Math.random() * 12) + 1;
  $(".purpGem").on("click", function(){
    
    crystalVal =  crystalVal + opal;
    $("#final").text(crystalVal);
    referee ();
   
  });
  // console.log (opal);
  
  let ruby = Math.floor(Math.random() * 12) + 1;
  $(".rubyGem").on("click", function(){
    
    crystalVal =  crystalVal + ruby;
    $("#final").text(crystalVal);
    referee ();
  
  });
  // console.log (ruby);

// After each game is met, the game is needed to reset without refreshing the page
function reset () {

  crystalVal = 0;
  let quest = Math.floor(Math.random() * 102) + 19;
  $("#goal").text("KARATS: " + quest);
    $("#final").text(crystalVal);
 

    // resetting value to the images after each game
    let diamond = Math.floor(Math.random() * 12) + 1;
$(".blueGem").on("click", function(){
  
  crystalVal =  crystalVal + diamond;
  $("#final").text(crystalVal);
  referee ();

});
console.log(diamond);

let emerald = Math.floor(Math.random() * 12) + 1;
  $(".greenGem").on("click", function(){
    
    crystalVal =  crystalVal + emerald;
    $("#final").text(crystalVal);
    referee ();
 
  });
console.log(emerald);


let opal = Math.floor(Math.random() * 12) + 1;
  $(".purpGem").on("click", function(){
    
    crystalVal =  crystalVal + opal;
    $("#final").text(crystalVal);
    referee ();
   
  });
console.log(opal);


  let ruby = Math.floor(Math.random() * 12) + 1;
  $(".rubyGem").on("click", function(){
    
    crystalVal =  crystalVal + ruby;
    $("#final").text(crystalVal);
    referee ();
  
  });
console.log(ruby);
  };



//add value to the wins&losses

  function referee () {
      if (crystalVal === quest){
          won = won+1;
          $("#up").text("Wins: " + won);
          reset();
} else if (crystalVal >quest){
    lost = lost+1;
    $("#down").text("Losses: " + lost);
    reset ();
  };
};
     


});