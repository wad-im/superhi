function makeMarquee (){
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
	const marqueeText = new Array(50).fill(title).join(' -')
	const marqueeTag = document.querySelector('.marquee span')
	marqueeTag.innerHTML = marqueeText
}
function random (min, max){
 return Math.floor(Math.random()*(max-min+1))+min
}

makeMarquee()

const circles = document.querySelectorAll('.circle')
circles.forEach((circle,index) => {
  circle.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.2)' },
  { transform: 'scale(1)' },
], {
  delay: 300* index,
  duration: 3000,
  iterations: Infinity
} )
})

const squiggles =document.querySelectorAll('.squiggle')
squiggles.forEach((squiggle, index)=>{
  const randomNumber = random(0, 45)
  squiggle.animate([
  { transform: 'rotate(0)' },
	{transform: `rotate(${randomNumber}deg)` },
  { transform: 'rotate(0)' },
], {
  delay: 300* index,
  duration: 5000,
  iterations: Infinity
})
})

inView('.section')
    .on('enter', section => {
  section.classList.add('in-viewport')
})
    .on('exit', section => {
        section.classList.remove('in-viewport');
    });

inView.threshold(0.2)
const sections = document.querySelectorAll('section')
sections.forEach((section, index)=>{
    const artists = section.querySelectorAll('.lineup li')
  const shapes = section.querySelectorAll('.shape')
    artists.forEach((artist, index) => {
    const delay = index * 300
    artist.style.transitionDelay =  `${delay}ms`
  })
    shapes.forEach((shape, index) => {
    const delay = (artists.length + index) * 150
    shape.style.transitionDelay =  `${delay}ms`
  })
  })

const scrollLinks = document.querySelectorAll('.js-scroll')
scrollLinks.forEach(link =>{
  link.addEventListener('click', (event)=>{
    event.preventDefault()
    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
     })
  })
})






