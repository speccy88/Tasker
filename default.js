// Add your TypeScript or JavaScript here 


WinJS.Application.onready = function () {

    // The next line will apply declarative control binding to all elements
    // (e.g. DIV with attribute: data-win-control="WinJS.UI.Rating")
    WinJS.UI.processAll();
	var addTaskBtn = document.getElementById("addTask");
    addTaskBtn.addEventListener("click", AddTask, false);
	alert("end");
	
};

WinJS.Application.start();

function AddTask() {
	alert("flyout");
    document.getElementById("addTaskFlyout").winControl.show(addTaskBtn, "right");
}