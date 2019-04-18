
console.log(" Message from your extension: I am running ! :-) ");

function changeImagesSources(newImageSource){  
      var images = document.getElementsByTagName('img'); 
      for (image of images)
      {
            image.src = newImageSource; 
      }
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
      switch (message.txt){      
            case "Puppies" : {
                  changeImagesSources("https://s3-media3.fl.yelpcdn.com/bphoto/cuTupHwAHzW1n5u-dehylQ/ls.jpg");
                  break;
            }
            case "Kittens" : {
                  changeImagesSources("https://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg");
                  break;
            }
      }
}