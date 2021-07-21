let number = 0

const stamps = [
  "circles.svg",
  "heart.svg",
  "moon.svg",
  "rainbow.svg",
  "waves.svg",
  "shooting-star.svg"
]

const stampTag = document.querySelector('div.stamps')

const addStamp = function(x, y){
  const img = document.createElement('img')
  img.setAttribute('src', stamps[number])
  img.style.top = y + "px"
  img.style.left = (x - window.innerWidth / 2) + "px"
  
  stampTag.appendChild(img)
  
  const audio = document.createElement("audio")
  audio.setAttribute('src', 'plop.mp3')
  audio.play()
  
  number = number + 1
  if(number > stamps.length-1){
    number = 0
  }
}

document.addEventListener('click', function(event){
  addStamp(event.pageX, event.pageY)
  
})