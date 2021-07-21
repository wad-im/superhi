const pixelsTag = document.querySelector('.pixels')
const bodyTag = document.querySelector('body')
const progressTag = document.querySelector('div.progress')
const sectionsTag = document.querySelectorAll('section')
const clientTag = document.querySelector('div.client')
const pageTag = document.querySelector('div.page')
const headerTag = document.querySelector('header')

document.addEventListener('scroll', function(){
  const pixels = window.pageYOffset
  
  pixelsTag.innerHTML = pixels
  
  })

document.addEventListener('scroll', function(){
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight
  
  const percentage = pixels / totalScrollableDistance
  
  progressTag.style.width = `${100*percentage}%`
})

document.addEventListener('scroll', function(){

  pixels = window.pageYOffset
 
  sectionsTag.forEach(section => {
    if (section.offsetTop - 50 <= pixels){
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML = section.getAttribute('data-page')
      if (section.hasAttribute("data-is-dark")) {
        headerTag.classList.add('white')
        progressTag.classList.add('white')
      } else {
        headerTag.classList.remove('white')
        progressTag.classList.remove('white')
      }
    }
  })
  })

document.addEventListener('scroll', function(){
  const topViewport = window.pageYOffset // how much I scrolled down the page
  const midViewport = topViewport + (window.innerHeight / 2) // how much I scrolled down the page + the middle of the current view
  
  sectionsTag.forEach(section => { // run for each ind. section
    const topSection = section.offsetTop // how far down is each section
    const midSection = topSection + (section.offsetHeight/2) // middle of the section
       
    const distanceToSection = midViewport - midSection
    
  	const parallaxTag = section.querySelectorAll(`[data-parallax]`)
    parallaxTag.forEach(tag =>{
      const speed = parseFloat(tag.getAttribute('data-parallax'))
    
    tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
  
})