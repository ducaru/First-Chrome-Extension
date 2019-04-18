console.log("Background running");

chrome.tabs.onCreated.addListener(newTab);

function newTab() {
    console.log("new tab!");
}
