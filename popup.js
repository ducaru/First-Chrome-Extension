
document.addEventListener('DOMContentLoaded', function() {
    
    let kittenClick = document.getElementById('kittenId'); 
    kittenClick.onclick = function() {
        changeImages(kittenClick.firstChild.data);
    };

    let puppyClick = document.getElementById('puppiesId');
    puppyClick.onclick = function() {
        changeImages(puppyClick.firstChild.data);
    };
});

function changeImages(text){
    let params ={
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {
        let msg = {
            txt: text
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}
