$(document).ready(function(){

 
	
// Pull Quote

$('.pq').each(function(){
    
    var quote = $(this).clone();
	quote.removeClasseapend
	quote.addClass('pullquote');
	$(this).before(quote);

});

// Practising Section
$('.title').click(function(){


   $('.text').slideToggle(1000);


});// end click

$('.text').css('clear', 'both');

























});// end ready