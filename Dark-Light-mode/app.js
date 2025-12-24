let theme = document.querySelector("i");

let body = document.querySelector("body");
let light = true;
theme.addEventListener("click", function () {
  if (light) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    theme.classList.replace("ri-sun-fill", "ri-moon-fill");
    light = false;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    theme.classList.replace("ri-moon-fill", "ri-sun-fill");
    light = true;
  }
});
