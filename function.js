$(document).ready(function() {
  drawGrid(16,60);
});

function drawGrid(number,size){
  for(i=0;i<number;i++){
    for(j=0;j<number;j++){
      $('.grid').append("<div class='pix'>.</div>");      
    }
  }
  $('.pix').height(size);
  $('.pix').width(size);
}

$( ".grid" ).on( "mouseenter", ".pix", 
  function() {
  	$( this ).addClass("color");}
);


  $('button').click(function(){
    $(".pix").remove();
    $(".temp").remove(); //bleh bad workaround?
    num = prompt("Please enter the width you want");
    drawGrid(num,960/num);
  });
