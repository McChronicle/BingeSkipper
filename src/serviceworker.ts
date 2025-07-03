import { DEFAULT_CONFIG, syncStorage } from "./storage";

chrome.runtime.onInstalled.addListener(({ reason }: chrome.runtime.InstalledDetails) => {
    if (reason === "install") {
        syncStorage.set(DEFAULT_CONFIG)
    }
});