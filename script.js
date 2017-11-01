$(document).ready(function() {
  console.log("it's working");
});

$(".table, available").on("click", function() {
  $("#form").css("display", "block");
  $(".table").attr(“data-tablenum”);
  console.log("tablenum");
});




});

$(".material-icons").click(function() {
  $("#form").css("display", "none");
  console.log("and this one?");
});

$(".button").click(function() {
  $("#form").css("display", "none");
  console.log("how bout this guy?");
});

myFunction() {
    var x = document.getElementById("firstname").value;
    document.getElementById("demo").innerHTML = x;
var reserveTable = [];

do {
  var input = prompt("Tweet?");
  // input will be falsey if user clicked cancel or entered nothing
  if (input) {
    var currentTime = new Date();
    var tweet = {
      text: input,
      date: currentTime,
      author: "@David"
    }
    tweets.push(tweet);
  }
} while (input);

for (var i = 0; i < tweets.length; i++) {
  var tweet = tweets[i];
  var output = tweet.text + " by " + tweet.author + " at " + tweet.date;
  console.log(output);
}
