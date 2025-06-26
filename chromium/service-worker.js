import { getSyncStorage, DEFAULT_CONFIG } from './storage.js';

chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        const storage = getSyncStorage();
        if (storage) {
            storage.set(DEFAULT_CONFIG);
        }
    }
});