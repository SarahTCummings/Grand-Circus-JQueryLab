$(document).ready(function() {
  console.log("it's working");
});

$("available table").on("click", function(event){
    $("form").css("display", "block");
});
