$(function() {

	$('.header-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	  });

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true
	  });

});
