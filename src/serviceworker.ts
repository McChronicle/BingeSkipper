import { Configuration, DEFAULT_CONFIG } from "./storage";

chrome.runtime.onInstalled.addListener(async ({ reason, previousVersion: previousVersionString }: chrome.runtime.InstalledDetails) => {
    if (reason === "install") {
        chrome.storage.sync.set(DEFAULT_CONFIG)
    } else if (reason === "update") {
        if (previousVersionString !== undefined) {
            const previousVersion: StandardVersionNumber = toStandardVersionNumber(previousVersionString);
            if (previousVersion.major <= 2) {
                if (previousVersion.minor === 0) { // migration from <= 2.0.0
                    const storageValuesOld: { [key: string]: boolean } = await chrome.storage.sync.get(["autoClickContinueWatching", "autoClickNextEpisode", "skipIntroAndRecap"]);
                    const config: Configuration = {
                        autoClickContinueWatching: storageValuesOld["autoClickContinueWatching"],
                        autoClickNextEpisode: storageValuesOld["autoClickNextEpisode"],
                        skipIntro: storageValuesOld["skipIntroAndRecap"],
                        skipRecap: storageValuesOld["skipIntroAndRecap"],
                    }
                    await chrome.storage.sync.clear();
                    await chrome.storage.sync.set(config);
                }
            }
        }
    }
});

chrome.runtime.onStartup.addListener(async () => {
    await chrome.storage.sync.get(["autoClickContinueWatching", "autoClickNextEpisode", "skipIntroAndRecap", "skipIntro", "skipRecap"]);
})

interface StandardVersionNumber {
    major: number,
    minor: number,
    patch: number,
}

function toStandardVersionNumber(versionString: string): StandardVersionNumber {
    const split: string[] = versionString.split(".");
    const versionNumber: StandardVersionNumber = {
        major: +split[0],
        minor: +split[1],
        patch: +split[2],
    };
    return versionNumber;
}
