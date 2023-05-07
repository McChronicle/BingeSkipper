
// register a tab listener to determine the active tab
chrome.tabs.onActivated.addListener(function(activeInfo) {
    // get the active tab and set the popup
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        setPopup(tab);
    });
});

// register a url listener to determine the current url
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // set the popup if the url has changed
    if (changeInfo.url) {
        setPopup(tab);
    }
});


function setPopup(tab) {
    // check the url of the active tab and set the popup accordingly
    if (tab.url.includes("netflix.com")) {
        chrome.action.setPopup({popup: "netflix/popup.html"});
    } else if (tab.url.includes("amazon.")) {
        chrome.action.setPopup({popup: "amazon/popup.html"});
    } else {
        chrome.action.setPopup({popup: "default/popup.html"});
    }
}