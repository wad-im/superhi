$(document).on('scroll', function(){
  
  var pixelsfromtop = $(document).scrollTop()
   
  if (pixelsfromtop > 50) {
    $('header').addClass('hidden')
  } else $('header').removeClass('hidden')
  
  if (pixelsfromtop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsfromtop < 1400) {
    $('body').css('background-color', '#a29c97')
  } else if (pixelsfromtop < 2200) {
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsfromtop < 3000) {
    $('body').css('background-color', '#fff0f')
  } else $('body').css('background-color', '#cdccc7')
  
    var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  
  var percentage = 100 * pixelsfromtop / difference
  
  $('.bar').css('width', percentage + '%')
  
  })

