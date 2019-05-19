var crystalVal = 0;
var quest = Math.floor(Math.random() * 102 + 19);
//console.log(crystalVal)

$("#goal").text("KARATS: " + quest);
//function karats (){
    //var quest = Math.floor(Math.random() * 102 + 19);
   // crystalVal.push(quest)};


//console.log (quest)





$(".bear").on("click", function(){
    crystalVal += 20; 
    alert("works" + crystalVal);
});


//$(".bear").on("click", function() {});
    

