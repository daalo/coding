$(document).ready(function(){

 
	
// Pull Quote

$('span.pq').each(function(){

	var quote = $(this).clone();
	quote.removeClass('pq');
	quote.addClass('pullquote');
	$(this).after(quote);
});

// Practising Section
$('.title').click(function(){

   $('.text').css({
   	'background-color':'rgb(20,100,50)'
   }).slideToggle(1000);



});// end click

$('.text').css('clear', 'both');

























});// end ready