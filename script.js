$('.tutortext__start').click(function() {
  if($('.tutortext__main').hasClass('_hide')){
    $('.tutortext__main').removeClass('_hide')
    $('.tutortext__start__icon').removeClass('_close')
  } 
  else {
    $('.tutortext__main').addClass('_hide')
    $('.tutortext__start__icon').addClass('_close')
  }
})