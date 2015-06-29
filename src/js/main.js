// Add main scripts here
$(document).ready(function() {
  var windowWidth = $(window).width();
  var trasnlatedDiff = 0;
  var slideIndex = 0;
  var slidesLength = $('.slide').length;
  resizeSlider();
  
  $( window ).resize(function() {
    windowWidth = $('.commission').width();
    resizeSlider();
  });

  if (windowWidth > 480) {
    $('.tel').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  function resizeSlider() {
    setTimeAnimation(0);
    $('.slides').width(windowWidth*slidesLength);
    $('.slide').width(windowWidth);
    translateSLides();
  }

  $('.arrow-right').on('click', function() {
    if (slideIndex+1 < slidesLength) {
      nextSlide();
    }
  });

  $('.arrow-left').hide();
  $('.arrow-left').on('click', function() {
    if (slideIndex > 0) {
      prevSlide();
    }
  });

if ($( window ).width() < 800) {
  $('.slides').on('swipeleft', function() {
    if (slideIndex+1 < slidesLength) {
      nextSlide();
    }
  });

  $('.slides').on('swiperight', function() {
    if (slideIndex > 0) {
      prevSlide();
    }
  });
}


  function nextSlide() {
    slideIndex = slideIndex+1;
    setTimeAnimation(300);
    translateSLides();
  }

  function prevSlide() {
    slideIndex = slideIndex-1;
    setTimeAnimation(300);
    translateSLides();
  }

  function translateSLides() {
    var distance = slideIndex * windowWidth;
    $('.slides').css({
        "webkitTransform":'translate3d('+-distance+'px, 0, 0)',
        "MozTransform":'translate3d('+-distance+'px, 0, 0)',
        "msTransform":'translate3d('+-distance+'px, 0, 0)',
        "OTransform":'translate3d('+-distance+'px, 0, 0)',
        "transform":'translate3d('+-distance+'px, 0, 0)'
    });

    if (slideIndex+1 === slidesLength) {
      $('.arrow-right').hide();
    } else {
      $('.arrow-right').show();
    }
    if (slideIndex === 0) {
      $('.arrow-left').hide();
    } else {
      $('.arrow-left').show();
    }
  }
  function setTimeAnimation(time) {
    $('.slides').css({
        "WebkitTransition": 'all '+time+'ms ease',
        "MozTransition": 'all '+time+'ms ease',
        "msTransition": 'all '+time+'ms ease',
        "OTransition": 'all '+time+'ms ease',
        "transition": 'all '+time+'ms ease'
    });
  }




//More Nav
$('.explore-more').on('click', function() {
  $('body').toggleClass('header-active');
});
$('.trading-services').on('click', function() {
  $('body').toggleClass('header-active');
});
$('.logo').on('click', function() {
  $('body').toggleClass('header-active');
});
$('section').on('click', function() {
  $('body').removeClass('header-active');
});





});