$("document").ready(function(){
  $("#bar").click(function(){
   $("#sidebar").animate({left: '0px'}, {speed: '0.05s'});
  })
  $("#times").click(function(){
  $("#sidebar").animate({left: '-250px'});
  })
  $(".combine").click(function(){
  })
  $("#clicka").click(function(){
    $(".story1").slideToggle();
    $(".akhans").toggle();
    $(".story2").hide();
    $(".story3").hide();
    $(".studio").show();
    $(".seenoi").show();
  })
  $("#clickb").click(function(){
    $(".story2").slideToggle();
    $(".studio").toggle();
    $(".story1").hide();
    $(".story3").hide();
    $(".akhans").show();
    $(".seenoi").show();
  })
  $("#clickc").click(function(){
    $(".story3").slideToggle();
    $(".seenoi").toggle();
    $(".story1").hide();
    $(".story2").hide();
    $(".akhans").show();
    $(".studio").show();
  })
  $("#a").click(function(){
    $("#sidebar").toggle()
  })
  $("#b").click(function(){
    $("#sidebar").toggle()
  })
  $("#c").click(function(){
    $("#sidebar").toggle()
  })
  $("#d").click(function(){
    $("#sidebar").toggle()
  })
  $("#e").click(function(){
    $("#sidebar").toggle()
  })
  $("#f").click(function(){
    $("#sidebar").toggle()
  })
  $("#g").click(function(){
    $("#sidebar").toggle()
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
  alert("Enter your name!");
} else {
    alert(name+ ", I have receive your information. I will get back to you in a few!");
    name.val  = " ";
    email.val = " ";
    message.val =" ";

      }
})
})
