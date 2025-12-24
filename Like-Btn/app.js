let img = document.querySelector("img");
let likeBtn = document.querySelector("#likeIcon");
img.addEventListener("dblclick", function () {
  likeBtn.style.opacity = "1";

  setTimeout(function () {
    likeBtn.style.opacity = "0";
  }, 1500);
});
