
export interface Configuration {
    skipIntro: boolean,
    skipRecap: boolean,
    autoClickNextEpisode: boolean,
    autoClickContinueWatching: boolean,
}

export const DEFAULT_CONFIG: Configuration = {
    skipIntro: true,
    skipRecap: true,
    autoClickNextEpisode: true,
    autoClickContinueWatching: true,
}

export const config: Configuration = await loadConfig();

export async function loadConfig(): Promise<Configuration> {
    const res: Configuration = await chrome.storage.sync.get(["autoClickContinueWatching", "autoClickNextEpisode", "skipIntro", "skipRecap"]);
    return res;
};

export type ConfigValue = "autoClickContinueWatching" | "autoClickNextEpisode" | "skipIntro" | "skipRecap";
type MaybeConfigValue = ConfigValue | null;

chrome.storage.sync.onChanged.addListener((changes) => {
    for (const key in changes) {
        const keyConfigValue: MaybeConfigValue = key as MaybeConfigValue;
        if (keyConfigValue !== null) {
            const change: chrome.storage.StorageChange = changes[keyConfigValue];
            config[keyConfigValue] = change.newValue;
        }
    }
});
