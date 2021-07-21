$('.filterslist a').on('click',function(){
    
  var filter = $(this).attr('data-filter')
  
  console.log(filter)
     
  $('.product').hide()
  $(filter).show()
  
  $('.filterslist a').removeClass('selected')
  $(this).addClass('selected')
  return false
  
})