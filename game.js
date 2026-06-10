var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = []; 
var randomChosenColour ;

var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started){
        $("#level-title").html("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence(){
    level++;
    $("#level-title").html("Level " + level); 
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
} 

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();   
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
