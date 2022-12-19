		document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM готов!')
})
		const mediaQuery = window.matchMedia('(min-width: 1000px)');
		if (mediaQuery.matches) {
    $(".multiple-items").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
});
		}
		else{
		    $(".multiple-items").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
});
    }
