import { getSyncStorage, loadConfig } from '../storage.js';

const storage = getSyncStorage();

// load checkbox state from synced storage when popup is opened
loadConfig().then((result) => {
    document.getElementById("skip-intro-and-recap").checked = result.skipIntroAndRecap;
    document.getElementById("auto-click-next-episode").checked = result.autoClickNextEpisode;
    document.getElementById("auto-click-continue-watching").checked = result.autoClickContinueWatching;
});
  
// save checkbox state to synced storage when user checks or unchecks a checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        var data = {};
        data[checkbox.value] = checkbox.checked;
        if (storage) {
            storage.set(data);
        }
    });
});