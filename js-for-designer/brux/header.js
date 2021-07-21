const headerTag = document.querySelector('header')

const toggleHeader = function (){
  const pixels = window.pageYOffset
  
  if (pixels > 60){
    headerTag.classList.add('scrolled')
  } else {
    headerTag.classList.remove('scrolled')
  }
}

const fadeBox = function(){
  const pixels = Math.min(window.pageYOffset/1000, 0.5)
  headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${pixels})`
}

toggleHeader()
fadeBox()

document.addEventListener('scroll', function(){
  toggleHeader()
  fadeBox()
})