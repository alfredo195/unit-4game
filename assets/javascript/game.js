$(document).ready(function(){
    //generate random number to guess
    var random = Math.floor(Math.random()*102+19)

    // display of radom number

    $("#scoreToMatch").text(random);

    //random number for crystals
    var num1 = Math.floor(Math.random()*12+1)
    var num2 = Math.floor(Math.random()*12+1)
    var num3 = Math.floor(Math.random()*12+1)
    var num4 = Math.floor(Math.random()*12+1) 

    //var to track win, losses, total

    var wins = 0;
    var losses = 0;
    var playerTotal =0;
})

