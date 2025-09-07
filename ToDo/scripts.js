function loadTask() {
    const text_lsit = document.getElementById("task-list");
    text_lsit.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((item, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerHTML = item;
        const div = document.createElement("div");
        div.innerHTML = `<button onClick="update(${index})" class="update"></button>
                        <button onClick="trace(${index})" class="trace"></button>`;
        li.appendChild(span);
        li.appendChild(div);
        text_lsit.appendChild(li);
    });
}
function addTask() {
    const text = document.getElementById("task-input").value.trim();
    if (text === "") {
        return;
    }
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("task-input").value = "";
    loadTask();
}
function trace(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTask();
}
function update(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newtask = prompt("Edit task:", tasks[index]);
    if (newtask !== null && newtask.trim() != "") {
        tasks[index] = newtask.trim();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTask();
    }
}
loadTask();
