
const getSyncStorage = () => {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync) {
        return chrome.storage.sync;
    }
    if (typeof browser !== "undefined" && browser.storage && browser.storage.sync) {
        return browser.storage.sync;
    }
    return null;
};

export function initializeConfigValues() {
    setSkipIntroAndRecap(true);
    setAutoClickNextEpisode(true);
    setAutoClickContinueWatching(true);
}

export function getSkipIntroAndRecap() {
    const storage = getSyncStorage();
    if (!storage) {
        return Promise.resolve(true);
    }
    return storage.get("skipIntroAndRecap").then((data) => data.skipIntroAndRecap);
}

export function setSkipIntroAndRecap(value) {
    const storage = getSyncStorage();
    if (!storage) {
        return;
    }
    storage.set({"skipIntroAndRecap": value});
}

export function getAutoClickNextEpisode() {
    const storage = getSyncStorage();
    if (!storage) {
        return Promise.resolve(true);
    }
    return storage.get("autoClickNextEpisode").then((data) => data.autoClickNextEpisode);
}

export function setAutoClickNextEpisode(value) {
    const storage = getSyncStorage();
    if (!storage) {
        return;
    }
    storage.set({"autoClickNextEpisode": value});
}

export function getAutoClickContinueWatching() {
    const storage = getSyncStorage();
    if (!storage) {
        return Promise.resolve(true);
    }
    return storage.get("autoClickContinueWatching").then((data) => data.autoClickContinueWatching);
}

export function setAutoClickContinueWatching(value) {
    const storage = getSyncStorage();
    if (!storage) {
        return;
    }
    storage.set({"autoClickContinueWatching": value});
}
