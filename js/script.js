$(document).ready(function(){

 
	
// Pull Quote

$('span.pq').each(function(){

	var quote = $(this).clone();
	quote.removeClass('pq');
	quote.addClass('pullquote');
	$(this).after(quote);
});

// Practising Section
$('.title').click(function(evt){

   $('.text').css({
   	'background-color':'rgb(100,20,10)'
   }).slideToggle(1000);
   	

});// end



$('.text').css('clear', 'both');

























});// end ready