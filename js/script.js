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

	$('.text').after('<h3>Hello World' + '<br />');
});

$('.text').css('clear', 'both');

























});// end ready