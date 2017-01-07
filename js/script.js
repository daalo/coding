$(document).ready(function(){

 
	
// Pull Quote

$('.pq').each(function(){
    
    var quote = $(this).clone();
	quote.removeClass('pq');
	quote.addClass('pullquote');
	$(this).before(quote);

});


$('.title').click(function(){

   var bgColor = $('#header').css('background-color');
   var text = '<h3>Never give up your goals</h3>'
   $('.text').after('<h3>PHP Programming</h3>');


});// end click

$('.text').css('clear', 'both');

























});// end ready