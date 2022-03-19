let root = document.documentElement;
let kartvizit = document.getElementById("kartvizit");
let kartBtn = document.getElementById("kart-add-btn");
let kartRemoveBtn = document.getElementById("kartgeri-btn");
let lightBtn = document.getElementById("light-mode");

function toggleKart() {
  kartvizit.classList.toggle("none-display");
}

let darkTheme = true;

function toggleNightMode() {
  if (darkTheme) {
    root.style.setProperty("--color-bg", "#cfc6c0");
    root.style.setProperty("--color-bg-variant", "#f5f5f4");
    root.style.setProperty("--color-bg-gradient", "#cfc6c0");
    root.style.setProperty("--color-primary", "#0c4a6e");
    root.style.setProperty("--color-white", "#101010");
    root.style.setProperty("--color-light", "rgba(0, 0, 0, 0.6)");
    darkTheme = false;
  } else {
    root.style.setProperty("--color-bg", "#292827");
    root.style.setProperty("--color-bg-variant", "#444342");
    root.style.setProperty("--color-bg-gradient", "rgb(35,34,39");
    root.style.setProperty("--color-primary", "#c09354");
    root.style.setProperty("--color-white", "#ffffff");
    root.style.setProperty("--color-light", "rgba(255, 255, 255, 0.6)");
    darkTheme = true;
  }
}

kartBtn.addEventListener("click", toggleKart);
kartRemoveBtn.addEventListener("click", toggleKart);

lightBtn.addEventListener("click", toggleNightMode);
