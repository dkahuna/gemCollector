$(document).ready ( function() {

let won = 0;
let lost = 0;
let crystalVal = 0;
const quest = Math.floor(Math.random() * 102 + 19);

//printing the goal of game
$("#goal").text("KARATS: " + quest);


// image values

var unoBear = Math.floor(Math.random() * 12 + 1);
$(".blueGem").on("click", function(){
  
  crystalVal =  crystalVal + unoBear;
  $("#final").text(crystalVal);
  referee ()

  console.log (unoBear)
})

  var unoBuffalo = Math.floor(Math.random() * 12 + 1);
  $(".greenGem").on("click", function(){
    
    crystalVal =  crystalVal + unoBuffalo;
    $("#final").text(crystalVal);
    referee ()
 
    console.log (unoBuffalo)
  })

  var unoWolf = Math.floor(Math.random() * 12 + 1);
  $(".purpGem").on("click", function(){
    
    crystalVal =  crystalVal + unoWolf;
    $("#final").text(crystalVal);
    referee ()
   
    console.log (unoWolf)
  })
  
  var unoTrex = Math.floor(Math.random() * 12 + 1);
  $(".rubyGem").on("click", function(){
    
    crystalVal =  crystalVal + unoTrex;
    $("#final").text(crystalVal);
    referee ()
  
    console.log (unoTrex)
  })

//add value to the wins&losses

  function referee () {
      if (crystalVal === quest){
          won = won+1;
          $("#up").text("Wins: " + won);
}   else if (crystalVal >quest){
    lost = lost+1;
    $("#down").text("Losses: " + lost);
  return reset ()
}
     

function reset () {
    quest = Math.floor(Math.random() * 102 + 19);
    $("#goal").text(quest);
    crystalVal = 0;
    $("#final").text(crystalVal);
    unoBear= Math.floor(Math.random() * 12 + 1);
    unoBuffalo= Math.floor(Math.random() * 12 + 1);
    unoWolf= Math.floor(Math.random() * 12 + 1);
    unoTrex = Math.floor(Math.random() * 12 + 1);
 
  };



  };

});
