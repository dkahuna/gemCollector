var won = 0;
var lost = 0;
var crystalVal = 0;
var quest = Math.floor(Math.random() * 102 + 19);

//console.log(crystalVal)


//printing the objective
$("#goal").text("KARATS: " + quest);



//function karats (){
    //var quest = Math.floor(Math.random() * 102 + 19);
   // crystalVal.push(quest)};


//console.log (quest)



// image values

var unoBear = Math.floor(Math.random() * 12 + 1);
$(".bear").on("click", function(){
  
  crystalVal =  crystalVal + unoBear;
  $("#final").text(crystalVal);
  referee ()

  console.log (unoBear)
})

  var unoBuffalo = Math.floor(Math.random() * 12 + 1);
  $(".unoBuffalo").on("click", function(){
    
    crystalVal =  crystalVal + unoBuffalo;
    $("#final").text(crystalVal);
    referee ()
 
    console.log (unoBuffalo)
  })

  var unoWolf = Math.floor(Math.random() * 12 + 1);
  $(".unoWolf").on("click", function(){
    
    crystalVal =  crystalVal + unoWolf;
    $("#final").text(crystalVal);
    referee ()
   
    console.log (unoWolf)
  })
  
  var unoTrex = Math.floor(Math.random() * 12 + 1);
  $(".unoTrex").on("click", function(){
    
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
     
// cant get it not to count a loss after winning the game in order for it to start a new game again
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


   // alert("works" + crystalVal);


//if (crystalVal === quest) {
//    alert("winner");
//}

//else if (crystalVal>= quest ) {
  //  alert("loser!");
//}
//$(".bear").on("click", function() {});
    
  };
