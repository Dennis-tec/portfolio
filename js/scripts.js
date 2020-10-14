
var message=function(email, name){

}
$("document").ready(function(){
  $("#bar").click(function(){
   $("#sidebar").animate({left: '0px'}, {speed: '0.05s'});
  })
  $("#times").click(function(){
    $("#sidebar").animate({left: '-250px'});
  })
  $("#clicka").click(function(){
    $(".story1").slideToggle();
    $(".akhans").toggle();
  })
  $("#clickb").click(function(){
    $(".story2").slideToggle();
    $(".studio").toggle();
  })
  $("#clickc").click(function(){
    $(".story3").slideToggle();
    $(".seenoi").toggle();
  })
  $("#button").click(function(){
  var name=$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();
  if (!name && !email) {
  alert("Enter your contact details!")
}else if (!email) {
  alert(name +", enter your email!");
} else if (!name) {
  alert("Enter your name!")
} else {
    alert(name+ ", I have receive your information. I will get back to you in a few!");
}
})
})
