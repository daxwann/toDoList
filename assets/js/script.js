//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete to-do's
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//enter new to do
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    //grab new to do text
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  };
});

$(".fa-pencil").click(function(){
  $("input[type='text']").fadeToggle();
})
