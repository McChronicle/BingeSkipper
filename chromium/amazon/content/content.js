
/**
 * .atvwebplayersdk-bottompanel-container .fu4rd6c.f1cw2swo is the button to skip advertisements
 */

const onMutation = () => {
    
    const skipAdButton = document.querySelector('.atvwebplayersdk-bottompanel-container .fu4rd6c.f1cw2swo');

    if (skipAdButton) {
        console.log("skipAdButton found");
        // get config from storage
        chrome.storage.sync.get(["amazonSkipAds"], function(result) {
            // click the button if the config is true with a delay of 1 second
            // this is because the player will behave weirdly if the button is clicked too early
            if (result.amazonSkipAds) {
                setTimeout(function() {
                    skipAdButton.click();
                }, 1000);
            }
        });
    }

}
    
const observer = new MutationObserver(onMutation);
    
observer.observe(document.body, {childList: true, subtree: true});