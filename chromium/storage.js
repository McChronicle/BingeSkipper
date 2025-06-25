
export function initializeConfigValues(params) {
    setSkipIntroAndRecap(true);
    setAutoClickNextEpisode(true);
    setAutoClickContinueWatching(true);
}

export function getSkipIntroAndRecap(value) {
    return chrome.storage.sync.get("skipIntroAndRecap");
}

export function setSkipIntroAndRecap(value) {
    chrome.storage.sync.set({"skipIntroAndRecap": value});
}

export function getAutoClickNextEpisode(value) {
    return chrome.storage.sync.get("autoClickNextEpisode");
}

export function setAutoClickNextEpisode(value) {
    chrome.storage.sync.set({"autoClickNextEpisode": value});
}

export function getAutoClickContinueWatching(value) {
    return chrome.storage.sync.get("autoClickContinueWatching");
}

export function setAutoClickContinueWatching(value) {
    chrome.storage.sync.set({"autoClickContinueWatching": value});
}
