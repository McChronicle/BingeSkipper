export const DEFAULT_CONFIG = {
    skipIntroAndRecap: true,
    autoClickNextEpisode: true,
    autoClickContinueWatching: true,
};

export const getSyncStorage = () => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
        return chrome.storage.sync;
    }
    if (typeof browser !== 'undefined' && browser.storage && browser.storage.sync) {
        return browser.storage.sync;
    }
    return null;
};

export const loadConfig = async () => {
    const storage = getSyncStorage();
    if (!storage) {
        return { ...DEFAULT_CONFIG };
    }
    const result = await new Promise((resolve) =>
        storage.get(Object.keys(DEFAULT_CONFIG), resolve)
    );
    const toSet = {};
    for (const key of Object.keys(DEFAULT_CONFIG)) {
        if (result[key] === undefined) {
            toSet[key] = DEFAULT_CONFIG[key];
        }
    }
    if (Object.keys(toSet).length) {
        await new Promise((resolve) => storage.set(toSet, resolve));
    }
    return { ...DEFAULT_CONFIG, ...result, ...toSet };
};
