
export interface Configuration {
    skipIntroAndRecap: boolean,
    autoClickNextEpisode: boolean,
    autoClickContinueWatching: boolean,
}

export const DEFAULT_CONFIG: Configuration = {
    skipIntroAndRecap: true,
    autoClickNextEpisode: true,
    autoClickContinueWatching: true,
}

export const syncStorage: chrome.storage.SyncStorageArea = chrome.storage.sync;

export async function loadConfig(): Promise<Configuration> {
    const res: Configuration = await syncStorage.get(["autoClickContinueWatching", "autoClickNextEpisode", "skipIntroAndRecap"]);
    return res;
};
