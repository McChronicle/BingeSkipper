// load checkbox state from synced storage when popup is opened
browser.storage.sync.get(["skipIntroAndRecap", "autoClickNextEpisode", "autoClickContinueWatching"]).then(result => {

    // set values initially if they don't exist
    if (result.skipIntroAndRecap === undefined) {
        browser.storage.sync.set({"skipIntroAndRecap": true});
        result.skipIntroAndRecap = true;
    }

    if (result.autoClickNextEpisode === undefined) {
        browser.storage.sync.set({"autoClickNextEpisode": true});
        result.autoClickNextEpisode = true;
    }

    if (result.autoClickContinueWatching === undefined) {
        browser.storage.sync.set({"autoClickContinueWatching": true});
        result.autoClickContinueWatching = true;
    }

    // set checkbox states to values from storage
    document.getElementById("skip-intro-and-recap").checked = result.skipIntroAndRecap;
    document.getElementById("auto-click-next-episode").checked = result.autoClickNextEpisode;
    document.getElementById("auto-click-continue-watching").checked = result.autoClickContinueWatching;
});
  
// save checkbox state to synced storage when user checks or unchecks a checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        var data = {};
        data[checkbox.value] = checkbox.checked;
        browser.storage.sync.set(data);
    });
});