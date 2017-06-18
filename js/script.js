$(document).ready(function(){

 
	
// Pull Quote

$('span.pq').each(function(){

	var quote = $(this).clone();
	quote.removeClass('pq');
	quote.addClass('pullquote');
	$(this).after(quote);
});

// Practising Section

$('.title').on('click', function(){

	$('.text').slideToggle(1000);


});// end on



$('.text').css('clear', 'both');

























});// end ready