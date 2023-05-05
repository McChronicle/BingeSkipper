
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

const onMutation = () => {
    
    const skipIntroOrRecapButton = document.querySelector('.watch-video--skip-content-button');
    const nextEpisodeButton = document.querySelector('[data-uia="next-episode-seamless-button"], [data-uia="next-episode-seamless-button-draining"]');
    const continueWatchingButton = document.querySelector('[data-uia="interrupt-autoplay-continue"]');
    
    if (skipIntroOrRecapButton) {
        // get config from storage
        chrome.storage.sync.get(["skipIntroAndRecap"], function(result) {
            // click the button if the config is true
            if (result.skipIntroAndRecap) {
                skipIntroOrRecapButton.click();
            }
        });
    } else if (nextEpisodeButton) {
        // get config from storage
        chrome.storage.sync.get(["autoClickNextEpisode"], function(result) {
            // click the button if the config is true
            if (result.autoClickNextEpisode) {
                nextEpisodeButton.click();
            }
        });
    } else if (continueWatchingButton) {
        // get config from storage
        chrome.storage.sync.get(["autoClickContinueWatching"], function(result) {
            // click the button if the config is true
            if (result.autoClickContinueWatching) {
                continueWatchingButton.click();
            }
        });
    }

}
    
const observer = new MutationObserver(onMutation);
    
observer.observe(document.body, {childList: true, subtree: true});