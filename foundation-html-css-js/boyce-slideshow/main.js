var currentSlide = 0

var totalSlides= $('.holder div').length

var  moveSlide = function (slide){
    var leftPosition = (-slide*100) + 'vw'
 
  $('.holder').css('left', leftPosition)
  
  var slideNumber = slide + 1
$('.steps').text(slideNumber + '/' + totalSlides)
}


var nextSlide = function(){
  currentSlide = currentSlide + 1 
  
  if (currentSlide >= totalSlides){
            currentSlide = 0
      }
  
  moveSlide(currentSlide)
}
    
var previousSlide = function(){
  currentSlide = currentSlide - 1 
  
  if (currentSlide < 0) {
   currentSlide = totalSlides - 1
  }
 
moveSlide(currentSlide)
  }

var autoSlide = setInterval(function(){
  
  nextSlide()
      
}, 3000)

$('.next').on('click', function() {
  clearInterval(autoSlide)
  nextSlide()
  
  return false
})

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  previousSlide()
  return false
})

var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + '/' + totalSlides)

$('body').on('keydown', function (event) {
  
var keyCode = event.keyCode

if (keyCode == 37) {
  clearInterval(autoSlide)
  previousSlide()
}
  
if (keyCode == 39){
  clearInterval(autoSlide)
  nextSlide()
}
  
})


