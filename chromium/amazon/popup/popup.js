// load checkbox state from synced storage when popup is opened
chrome.storage.sync.get(["amazonSkipAds"], function(result) {

    // set values initially if they don't exist
    if (result.amazonSkipAds === undefined) {
        chrome.storage.sync.set({"amazonSkipAds": true});
        result.amazonSkipAds = true;
    }

    // set checkbox states to values from storage
    document.getElementById("skip-ads").checked = result.amazonSkipAds;
});
  
// save checkbox state to synced storage when user checks or unchecks a checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        var data = {};
        data[checkbox.value] = checkbox.checked;
        chrome.storage.sync.set(data);
    });
});