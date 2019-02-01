$(document).ready(function(){
  $("p").click(function(){
    $("p").addClass("highlight parabox");
  });
  $(".highlight").click(function(){
    $("p").removeClass("highlight parabox");
    console.log("I'm here")
  });
});
