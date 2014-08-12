// Add your TypeScript or JavaScript here 

WinJS.Application.onready = function () {

    // The next line will apply declarative control binding to all elements
    // (e.g. DIV with attribute: data-win-control="WinJS.UI.Rating")
    WinJS.UI.processAll();
    var button1 = document.getElementById("btn1");
    button1.addEventListener("click", button1Click, false);
};

WinJS.Application.start();

function button1Click() {
    console.log("click")
    //alert("allo mek", "titre");
    var button1 = document.getElementById("btn1");
    document.getElementById("confirmFlyout").winControl.show(button1);
}