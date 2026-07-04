const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

const keyword = this.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

const text = card.innerText.toLowerCase();

if(text.indexOf(keyword) > -1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});
