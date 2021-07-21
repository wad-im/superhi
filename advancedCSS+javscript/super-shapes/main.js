const duplicateHTML = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  return element.innerHTML = newContent
}

const crosses = document.querySelector('#crosses')
duplicateHTML(crosses,10)

anime({
  targets: '#tunnel circle',
  scale: 1.1,
  direction: 'alternate',
  loop: true,
  duration: 500,
  easing: 'easeInOutSine',
  delay: (el, index) => index*50,
});

anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear'
})


const zigZagPath = document.querySelector('#zigzag path');
  const zigZagOffset = anime.setDashoffset(zigZagPath);
  zigZagPath.setAttribute('stroke-dashoffset',  zigZagOffset);
  anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset',  waveOffset);
anime({
    targets: wavePath,
    strokeDashoffset: [0, waveOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

duplicateHTML(document.querySelector('#dots'), 40)
 anime({
    targets: '#dots .dot',
    rotate: (el, i) => anime.random(90, 360),
    delay: (el, i) => anime.random(0, 500),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
  });


duplicateHTML(document.querySelector('#circles'), 20)
anime({
  targets: '#circles .dot',
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#flash .flash',
  // we put the colors into an array and grab each one by its index
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#squares rect',
  // we need to force the translate position to center the squares
  translateX: ['-50%', '-50%'],
  // we’re not actually animating them, it’s a bit of a hack
  translateY: ['-50%', '-50%'],
  // animate rotation from 45 to 0 to -45
  rotate: [45, 0, -45],
  // delay each one incrementally by 100ms
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})