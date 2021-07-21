const API_KEY = '1zYds1x49mqgqt3TAroTsD91gSECRqoe'
const clearEl = document.querySelector('.search-clear')
const videosEL = document.querySelector('.videos')
const searchEl = document.querySelector('.search-input')
const hintEl = document.querySelector('.search-hint')

const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

const createVideo = function(src) {
  const video = document.createElement('video')
  video.src = src
  video.autoplay = true
  video.loop = true
  video.muted = true
  video.className = 'video'
  return video
}

const toggleLoading = state => {
  if (state) {
    document.body.classList.add('loading')
    searchEl.disabled= true
  } else {
    document.body.classList.remove('loading')
    searchEl.disabled= false
    searchEl.focus()
  }
}

const searchGiphy = searchTerm => {
  toggleLoading(true)
  console.log('search for', searchTerm)
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=pg-13&lang=en`
  )
    .then(response => {
      return response.json()
    })
    .then(json => {
      const gif = randomChoice(json.data)
      const src = gif.images.original.mp4
      const video = createVideo(src)
      videosEL.appendChild(video)
      video.addEventListener('loadeddata', event => {
        video.classList.add('visible')
        toggleLoading(false)
        document.body.classList.add('has-results')
        hintEl.innerHTML = `Hit enter to search for more ${searchTerm}`
      })
    })
    .catch(error => {
    toggleLoading(false)
  	hintEl.innerHTML =  `Nothing found for ${searchTerm}`
  })
}

const doSearch = event => {
  const searchTerm = searchEl.value
  if (searchTerm.length > 2) {
    hintEl.innerHTML = `Hit enter to search for ${searchTerm}`
    document.body.classList.add('show-hint')
  } else {
    document.body.classList.remove('show-hint')
  }

  if (event.key === 'Enter' && searchTerm.length > 2) {
    searchGiphy(searchTerm)
  }
}

const clearSearch = event => {
  document.body.classList.remove('has-results')
  videosEL.innerHTML = ''
  hintEl.innerHTML = ''
  searchEl.value = ''
  searchEl.focus()
}

document.addEventListener('keyup', event => {
  if(event.key === 'Escape'){
     clearSearch()
     }
})

searchEl.addEventListener('keyup', doSearch)
clearEl.addEventListener('click', clearSearch)

