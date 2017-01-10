$(document).ready(function(){

 
	
// Pull Quote

$('.pq').each(function(){
    
    var quote = $(this).clone();
	quote.removeClass('pq');
	quote.addClass('pullquote');
	$(this).before(quote);

});


$('.title').click(function(){

	var text = 'Hello World';

   $('.text').slideToggle(1000);


});// end click

$('.text').css('clear', 'both');

























});// end ready