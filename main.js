let groceryList = [];

function updateArray() {
  let inputValue = document.getElementById("input").value;
  groceryList.push(inputValue);
}

function addItem() {
  let item = document.getElementById("input").value;
  if (item === "") {
    alert("Please insert an item");
  } else {
    let newItem = document.createElement("li");
    let span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "✖";
    span.addEventListener("click", function () {
      newItem.remove();
    });
    let checkBtn = document.createElement("button");
    checkBtn.className = "check-btn";
    checkBtn.innerHTML = "✓";
    checkBtn.onclick = function () {
      newItem.classList.toggle("checked");
    };
    newItem.innerHTML = item;
    newItem.appendChild(checkBtn);
    newItem.appendChild(span);
    document.getElementById("shoppingList").appendChild(newItem);
    updateArray();
    document.getElementById("input").value = "";
  }
}

function displayList() {
  let list = document.getElementById("shoppingList");
  list.innerHTML = "";
  for (let i = 0; i < groceryList.length; i++) {
    let item = document.createElement("li");
    let span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "\u00D7";
    span.addEventListener("click", function () {
      groceryList.splice(i, 1);
      displayList();
    });
    item.innerHTML = groceryList[i];
    item.appendChild(span);
    list.appendChild(item);
  }
}
let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("addButton").click();
  }
});
