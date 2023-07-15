var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$('.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);

  $("#" + randomChosenColours).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColours + ".mp3");
  audio.play();
 
}
