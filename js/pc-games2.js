const darkBtn = document.querySelector("#darkBtn");
let darkMode = false;

darkBtn.addEventListener("click", function () {
 
  if (darkMode) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "gray";
  }

  // darkMode  tersine çevir
  darkMode = !darkMode;
});