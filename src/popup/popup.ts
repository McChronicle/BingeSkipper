import { loadConfig, syncStorage } from "../storage";

// load checkbox state from synced storage when popup is opened
loadConfig().then((config) => {
    const skipIntroCheckbox: HTMLInputElement = document.getElementById("skip-intro-and-recap") as HTMLInputElement;
    skipIntroCheckbox.checked = config.skipIntroAndRecap;

    const autoClickNextEpisodeCheckbox: HTMLInputElement = document.getElementById("auto-click-next-episode") as HTMLInputElement;
    autoClickNextEpisodeCheckbox.checked = config.autoClickNextEpisode;

    const autoClickContinueWatchingCheckbox: HTMLInputElement = document.getElementById("auto-click-continue-watching") as HTMLInputElement;
    autoClickContinueWatchingCheckbox.checked = config.autoClickContinueWatching;
});
  
// save checkbox state to synced storage when user checks or unchecks a checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function(checkbox: Element) {
    checkbox.addEventListener("change", function() {
        const checkboxElement: HTMLInputElement = checkbox as HTMLInputElement;
        const data: Map<string, boolean> = new Map;
        data.set(checkboxElement.value, checkboxElement.checked);
        syncStorage.set(data);
    });
});