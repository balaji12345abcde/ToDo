function addTask() {
    let input = document.getElementById("task-input");
    let taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskValue;

    // Action buttons
    let actions = document.createElement("div");
    actions.classList.add("actions");

    // Edit button
    let editBtn = document.createElement("i");
    editBtn.classList.add("fa", "fa-rotate-right");
    editBtn.onclick = function () {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };

    // Delete button
    let delBtn = document.createElement("i");
    delBtn.classList.add("fa", "fa-trash");
    delBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("task-list").appendChild(li);

    input.value = "";
}