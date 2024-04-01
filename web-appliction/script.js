function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    var taskTextNode = document.createTextNode(taskText);
    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    taskList.appendChild(li);
    
    taskInput.value = "";
}
