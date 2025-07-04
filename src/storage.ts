
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

export const config: Configuration = await loadConfig();

export async function loadConfig(): Promise<Configuration> {
    const res: Configuration = await syncStorage.get(["autoClickContinueWatching", "autoClickNextEpisode", "skipIntroAndRecap"]);
    return res;
};

type ConfigValue = "autoClickContinueWatching" | "autoClickNextEpisode" | "skipIntroAndRecap";
type MaybeConfigValue = ConfigValue | null;

syncStorage.onChanged.addListener((changes) => {
    for (const key in changes) {
        const keyConfigValue: MaybeConfigValue = key as MaybeConfigValue;
        if (keyConfigValue !== null) {
            const change: chrome.storage.StorageChange = changes[keyConfigValue];
            config[keyConfigValue] = change.newValue;
        }
    }
});
