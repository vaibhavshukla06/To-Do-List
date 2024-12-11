// Get elements from the DOM
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement("li");

        // Add task text to the list item
        li.textContent = taskText;

        // Create and add a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        // Add delete functionality
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        // Create functionality for marking tasks as complete
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
});

// Allow adding tasks with Enter key
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addButton.click();
    }
});
