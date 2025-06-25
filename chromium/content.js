
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

const getSyncStorage = () => {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync) {
        return chrome.storage.sync;
    }
    if (typeof browser !== "undefined" && browser.storage && browser.storage.sync) {
        return browser.storage.sync;
    }
    return null;
};

const getConfig = async () => {
    const storage = getSyncStorage();
    if (!storage) {
        return {
            skipIntroAndRecap: true,
            autoClickNextEpisode: true,
            autoClickContinueWatching: true,
        };
    }

    return storage.get([
        "skipIntroAndRecap",
        "autoClickNextEpisode",
        "autoClickContinueWatching",
    ]);
};

const onMutation = async () => {

    const skipIntroOrRecapButton = document.querySelector('.watch-video--skip-content-button');
    const nextEpisodeButton = document.querySelector('[data-uia="next-episode-seamless-button"], [data-uia="next-episode-seamless-button-draining"]');
    const continueWatchingButton = document.querySelector('[data-uia="interrupt-autoplay-continue"]');

    const {
        skipIntroAndRecap = true,
        autoClickNextEpisode = true,
        autoClickContinueWatching = true,
    } = await getConfig();

    if (skipIntroOrRecapButton && skipIntroAndRecap) {
        skipIntroOrRecapButton.click();
    } else if (nextEpisodeButton && autoClickNextEpisode) {
        nextEpisodeButton.click();
    } else if (continueWatchingButton && autoClickContinueWatching) {
        continueWatchingButton.click();
    }

}
    
const observer = new MutationObserver(onMutation);
    
observer.observe(document.body, {childList: true, subtree: true});