
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

import { config } from "./storage";

const onMutation: () => Promise<void> = async () => {
    if (config.skipIntro) {
        const skipIntroButton: HTMLElement | null = document.querySelector("[data-uia='player-skip-intro']");
        skipIntroButton?.click();
    }
    if (config.skipRecap) {
        const skipRecapButton: HTMLElement | null = document.querySelector("[data-uia='player-skip-recap']");
        skipRecapButton?.click();
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
