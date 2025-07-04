
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

import { config } from "./storage";

const onMutation: () => Promise<void> = async () => {
    if (config.skipIntroAndRecap) {
        const skipIntroOrRecapButton: HTMLElement | null = document.querySelector(".watch-video--skip-content-button");
        skipIntroOrRecapButton?.click();
    }
    if (config.autoClickNextEpisode) {
        const nextEpisodeButton: HTMLElement | null = document.querySelector("[data-uia='next-episode-seamless-button'], [data-uia='next-episode-seamless-button-draining']");
        nextEpisodeButton?.click();
    }
    if (config.autoClickContinueWatching) {
        const continueWatchingButton: HTMLElement | null = document.querySelector("[data-uia='interrupt-autoplay-continue']");
        continueWatchingButton?.click();
    }
}

const observer: MutationObserver = new MutationObserver(onMutation);
observer.observe(document.body, { childList: true, subtree: true });
