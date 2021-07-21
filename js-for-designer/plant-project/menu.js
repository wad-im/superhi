const toggleTag = document.querySelector('a.toggle-nav')
const mainTag = document.querySelector('main')

toggleTag.addEventListener('click', function(){
 	mainTag.classList.toggle('open')
   
  if (mainTag.classList.contains('open')){
    toggleTag.innerHTML = '<img src="close.svg"> Close'
  } else {
    toggleTag.innerHTML ='<img src="menu.svg"> Menu'
  }
    
    
})