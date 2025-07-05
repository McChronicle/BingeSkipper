import { config } from "../storage";

// load checkbox state from synced storage when popup is opened
const skipIntroCheckbox: HTMLInputElement = document.getElementById("skip-intro") as HTMLInputElement;
skipIntroCheckbox.checked = config.skipIntro;

const skipRecapCheckbox: HTMLInputElement = document.getElementById("skip-recap") as HTMLInputElement;
skipRecapCheckbox.checked = config.skipRecap;

const autoClickNextEpisodeCheckbox: HTMLInputElement = document.getElementById("auto-click-next-episode") as HTMLInputElement;
autoClickNextEpisodeCheckbox.checked = config.autoClickNextEpisode;

const autoClickContinueWatchingCheckbox: HTMLInputElement = document.getElementById("auto-click-continue-watching") as HTMLInputElement;
autoClickContinueWatchingCheckbox.checked = config.autoClickContinueWatching;

  
// save checkbox state to synced storage when user checks or unchecks a checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function(checkbox: Element) {
    checkbox.addEventListener("change", function() {
        const checkboxElement: HTMLInputElement = checkbox as HTMLInputElement;
        chrome.storage.sync.set({ [checkboxElement.value]: checkboxElement.checked });
    });
});
