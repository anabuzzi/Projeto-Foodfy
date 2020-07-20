const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const img = document.querySelector('img')



for (let card of cards) {
      
    card.addEventListener("click", function () {
    const imgId = card.getAttribute("id")
    modalOverlay.classList.add('active')     
    modalOverlay.querySelector("iframe").src = `/assets/${imgId}.png` 

 
    modalOverlay.querySelector('.iframecontent').textContent = card.querySelector('.cardtitle').textContent
    modalOverlay.querySelector('.iframecontent2').textContent= card.querySelector('.infocard').textContent
      


       
    })
  }
  
document.querySelector('.maximize-modal').addEventListener ("click", function() {
    modalOverlay.classList.add('maximize')
    

  
}) 


document.querySelector('.minimize-modal').addEventListener ("click", function() {
    modalOverlay.classList.remove('maximize')
    
}) 

document.querySelector('.close-modal').addEventListener ("click", function() {    
modalOverlay.classList.remove("active")
modalOverlay.classList.remove("maximize")
})




