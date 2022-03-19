let kartvizit = document.getElementById("kartvizit")
let kartBtn = document.getElementById("kart-add-btn");
let kartRemoveBtn = document.getElementById("kartgeri-btn");


function toggleKart() {
  kartvizit.classList.toggle("none-display")
}

kartBtn.addEventListener("click", toggleKart)
kartRemoveBtn.addEventListener("click", toggleKart)