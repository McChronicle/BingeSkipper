
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

const storageModule = import(chrome.runtime.getURL('storage.js'));

const onMutation = async () => {

    const skipIntroOrRecapButton = document.querySelector('.watch-video--skip-content-button');
    const nextEpisodeButton = document.querySelector('[data-uia="next-episode-seamless-button"], [data-uia="next-episode-seamless-button-draining"]');
    const continueWatchingButton = document.querySelector('[data-uia="interrupt-autoplay-continue"]');

    const { loadConfig } = await storageModule;
    const {
        skipIntroAndRecap,
        autoClickNextEpisode,
        autoClickContinueWatching,
    } = await loadConfig();

    if (skipIntroOrRecapButton && skipIntroAndRecap) {
        skipIntroOrRecapButton.click();
    } else if (nextEpisodeButton && autoClickNextEpisode) {
        nextEpisodeButton.click();
    } else if (continueWatchingButton && autoClickContinueWatching) {
        continueWatchingButton.click();
    }

}
    
storageModule.then(() => {
    const observer = new MutationObserver(onMutation);
    observer.observe(document.body, { childList: true, subtree: true });
});

