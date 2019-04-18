console.log("Background running");

chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.tabs.onCreated.addListener(newTab);

function buttonClicked() {
    console.log("button clicked!");
}

function newTab() {
    console.log("new tab!");
}
