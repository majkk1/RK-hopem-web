$(document).ready(function(){
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 64}, 500);
    });
    
    $('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
})


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
