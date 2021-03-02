chrome.tabs.executeScript({ code: `(${ getContent })()` });


function getContent() {
    var videos = document.querySelectorAll('video'); // get all videos using "video" css selector
    window.open(videos[0].src);
};