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

   $('.text').slideToggle(1000);
   

});// end



$('#link').click(function(){

 	return false;
});



$('.text').css('clear', 'both');

























});// end ready