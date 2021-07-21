const sentenceTag = document.querySelector('input[type="text"]')
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

const typesizeTag = document.querySelector('input[name="typesize"]')
const typesizeOutputTag = document.querySelector('.typesize-output')

const lineheightTag = document.querySelector('input[name="lineheight"]')
const lineheightOutputTag = document.querySelector('.lineheight-output')

const fontweightTag = document.querySelector('input[name=fontweight]')
const fontweightOutputTag = document.querySelector('.fontweight-output')

const typefaceTag = document.querySelector('select[name="typeface"]')

const checkboxTag = document.querySelector('input[name="italic"]')

const colorTag = document.querySelectorAll('.colors div')

sentenceTag.addEventListener("keyup", function(){
  if(this.value){
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
  })

outputTag.addEventListener('keyup', function(){
   sentenceTag.value = this.value                        
})

typesizeTag.addEventListener('input', function(){
  outputTag.style.fontSize = this.value + "px"
  typesizeOutputTag.innerHTML = this.value + "px"
  })

lineheightTag.addEventListener('input', function(){
  outputTag.style.lineHeight = this.value
  lineheightOutputTag.innerHTML = this.value
})

fontweightTag.addEventListener('input', function(){
  outputTag.style.fontWeight = this.value
  fontweightOutputTag.innerHTML = this.value
})

checkboxTag.addEventListener('change', function(){
  if (this.checked){
  	outputTag.style.fontStyle = 'italic'
} else {
  outputTag.style.fontStyle = ""
}   
})

typefaceTag.addEventListener('input', function(){
  outputTag.style.fontFamily = this.value
})

colorTag.forEach(tag => {
  tag.addEventListener('click', function(){
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    
    colorTag.forEach(tag => {
		tag.classList.remove('selected')
})
    this.classList.add('selected')
})
  })
  

  




