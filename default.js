// Add your TypeScript or JavaScript here 


WinJS.Application.onready = function () {

    // The next line will apply declarative control binding to all elements
    // (e.g. DIV with attribute: data-win-control="WinJS.UI.Rating")
    WinJS.UI.processAll();
	var addTaskBtn = document.getElementById("addTask");
	var createTaskBtn = document.getElementById("createTask");
    addTaskBtn.addEventListener("click", ShowAddTaskFlyout, false);
	createTaskBtn.addEventListener("click", DisplayTask, false);	
};

WinJS.Application.start();



function ShowAddTaskFlyout() {
	var addTaskBtn = document.getElementById("addTask");
    document.getElementById("addTaskFlyout").winControl.show(addTaskBtn, "right");
}

function DisplayTask() {
	var createTaskBtn = document.getElementById("createTask");
	var taskListDiv = document.getElementById("taskList");
	var taskNameInput = document.getElementById("taskName");
	
	var taskName = taskNameInput.value;
	var task = document.createElement("p");
	var textNode = document.createTextNode(taskName);
	task.appendChild(textNode);
	taskListDiv.appendChild(task);

}