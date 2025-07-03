
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

import { Configuration, loadConfig } from "./storage";


const onMutation: () => Promise<void> = async () => {

    const skipIntroOrRecapButton: HTMLElement | null = document.querySelector(".watch-video--skip-content-button");
    const nextEpisodeButton: HTMLElement | null = document.querySelector("[data-uia='next-episode-seamless-button'], [data-uia='next-episode-seamless-button-draining']");
    const continueWatchingButton: HTMLElement | null = document.querySelector("[data-uia='interrupt-autoplay-continue']");

    const config: Configuration = await loadConfig();

    if (skipIntroOrRecapButton && config.skipIntroAndRecap) {
        skipIntroOrRecapButton.click();
    } else if (nextEpisodeButton && config.autoClickNextEpisode) {
        nextEpisodeButton.click();
    } else if (continueWatchingButton && config.autoClickContinueWatching) {
        continueWatchingButton.click();
    }

}


const observer: MutationObserver = new MutationObserver(onMutation);
observer.observe(document.body, { childList: true, subtree: true });


