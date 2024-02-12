// JavaScript Document
$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
        html:true
    }); //Initialize Bootstrap Popovers
	$('.scbtable td').hover( //Apply column hover
		function(){
			$('.scbtable td:nth-child('+($(this).index()+1)+')').addClass('hover');
		},
		function(){
			$('.scbtable td:nth-child('+($(this).index()+1)+')').removeClass('hover');
		});	

	
	$("#toc a").on('click', function(event) { // Add smooth scrolling on all links inside the navbar
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	
	
	$(window).scroll(function() { // when the page is scrolled run this
    if($(this).scrollTop() != 0) { // if you're NOT at the top
        $('#scb-to-top').fadeIn("fast"); // fade in
    } else { // else
        $('#scb-to-top').fadeOut("fast"); // fade out
    }
});

	$('#scb-to-top').click(function() { // when the button is clicked
    $('body,html').animate({scrollTop:0},500); // return to the top with a nice animation
});
	
});