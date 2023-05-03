
/**
 * .watch-video--skip-content-button is the class for the "Skip Intro" button
 * [data-uia="next-episode-seamless-button"] is the attribute for the "Next Episode" button (not draining)
 * [data-uia="next-episode-seamless-button-draining"] is the attribute for the "Next Episode" button (draining)
 * [data-uia="interrupt-autoplay-continue"] is the attribute for the "Continue Watching" button
 */

const onMutation = () => {
  const element = document.querySelector('.watch-video--skip-content-button, [data-uia="next-episode-seamless-button"], [data-uia="next-episode-seamless-button-draining"], [data-uia="interrupt-autoplay-continue"]');
  if (element) {
    element.click();
  }
}
  
const observer = new MutationObserver(onMutation);
  
observer.observe(document.body, {childList: true, subtree: true});