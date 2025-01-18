const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
    }

    input.value = "";
});