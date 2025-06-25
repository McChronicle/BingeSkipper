import { initializeConfigValues } from "./storage.js";

chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        initializeConfigValues();
    }
});