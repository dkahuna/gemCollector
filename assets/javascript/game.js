var crystalVal = 0;
var quest = Math.floor(Math.random() * 102 + 19);

//console.log(crystalVal)

$("#goal").text("KARATS: " + quest);
//function karats (){
    //var quest = Math.floor(Math.random() * 102 + 19);
   // crystalVal.push(quest)};


//console.log (quest)




var unoBear = Math.floor(Math.random() * 12 + 1);
$(".bear").on("click", function(){
  
  crystalVal =  crystalVal + unoBear;
  $("#final").text(crystalVal);
  console.log (unoBear)
})

  var unoBuffalo = Math.floor(Math.random() * 12 + 1);
  $(".unoBuffalo").on("click", function(){
    
    crystalVal =  crystalVal + unoBuffalo;
    $("#final").text(crystalVal);
    console.log (unoBuffalo)
  })

  var unoWolf = Math.floor(Math.random() * 12 + 1);
  $(".unoWolf").on("click", function(){
    
    crystalVal =  crystalVal + unoWolf;
    $("#final").text(crystalVal);
    console.log (unoWolf)
  })
  
  var unoTrex = Math.floor(Math.random() * 12 + 1);
  $(".unoTrex").on("click", function(){
    
    crystalVal =  crystalVal + unoTrex;
    $("#final").text(crystalVal);
    console.log (unoTrex)
  })
   // alert("works" + crystalVal);


//if (crystalVal === quest) {
//    alert("winner");
//}

//else if (crystalVal>= quest ) {
  //  alert("loser!");
//}
//$(".bear").on("click", function() {});
    

;