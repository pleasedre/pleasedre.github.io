$(document).ready(function() {
 
  setTimeout(function(){
    $(".nothing").addClass("show"); 
    // $("body").addClass("alarming");
  }, 10000);

  setTimeout(function(){
    $(".button").addClass("show"); 
    // $("body").addClass("alarming");
  }, 12000);

  $(".button").click(function(){ 
 	location.reload();
  });

});