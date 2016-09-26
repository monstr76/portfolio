$(function(){
	
	var images = $('#slider > img');
	var i = 0;
	
	$('#right_button').click(function(){
		images.eq(i).fadeOut(1000);
		i++;
		if (i >= images.length)
			i=0;
		
		images.eq(i).fadeIn(1000);
	});
	
	$('#left_button').click(function(){
		images.eq(i).fadeOut(1000);
		i--;
		
		if (i < 1)
			i=images.length-1;
		
		images.eq(i).fadeIn(1000);
		
	});
	
	setInterval (function(){
		images.eq(i).fadeOut(1000);
		i++;
		if (i >= images.length)
			i=0;
		
		images.eq(i).fadeIn(1000);
	},5000);
	
});