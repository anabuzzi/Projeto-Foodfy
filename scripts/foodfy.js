const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const imgId = document.querySelectorAll('.img')
var modal = document.getElementById(".myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onClick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  }

for (let card of cards) {
      
      card.addEventListener("click", function () {
      const imgId = card.getAttribute("id")
      modalOverlay.classList.add('active')     
      modalOverlay.querySelector("iframe").src = `/assets/${imgId}.png`
      
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




