const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-cont");

function addMe() {
  if (inputBox.value === "") {
    alert("You must Write Something!");
  } else {
    // For input a value
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // FOr delete button:

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

// For check a task:

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  // For delete task
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// For store data in local storage:

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// For show data
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
