$('.photos a').on('click', function(){
  
  var currentpicture = $(this).html()
  $('.modal-content').html(currentpicture)
  
  $('.modal').fadeIn(500)
 $('body').addClass('lightbox-open')    
  return false
})

$('.modal-background, .modal-close').on('click', function(){
  
    $('.modal').fadeOut(500)
 $('body').removeClass('lightbox-open')   
  
  
  return false
  
})

