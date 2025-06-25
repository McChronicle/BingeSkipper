import { setAutoClickContinueWatching, setAutoClickNextEpisode, setSkipIntroAndRecap } from "../storage.js";

// load checkbox state from synced storage when popup is opened
chrome.storage.sync.get(["skipIntroAndRecap", "autoClickNextEpisode", "autoClickContinueWatching"], function(result) {

    // set values if they don't exist for some reason
    if (result.skipIntroAndRecap === undefined) {
        setSkipIntroAndRecap(true);
        result.skipIntroAndRecap = true;
    }
    if (result.autoClickNextEpisode === undefined) {
        setAutoClickNextEpisode(true);
        result.autoClickNextEpisode = true;
    }
    if (result.autoClickContinueWatching === undefined) {
        setAutoClickContinueWatching(true);
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
        chrome.storage.sync.set(data);
    });
});