let input = document.querySelector("#userInput");
let addBtn = document.querySelector("#addBtn");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
  let userInputValue = input.value;

  if (input.value === "") {
    alert("pls enter task");
  } else {
    let li = document.createElement("li");
    li.textContent = userInputValue;
    ul.appendChild(li);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("ri-close-line");
    deleteIcon.id = "delete";
    li.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", function () {
      li.remove();
    });

    input.value = "";
  }
});
