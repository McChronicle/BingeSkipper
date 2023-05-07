// load checkbox state from synced storage when popup is opened
browser.storage.sync.get(["netflixSkipIntroAndRecap", "netflixAutoClickNextEpisode", "netflixAutoClickContinueWatching"]).then(result => {

    // set values initially if they don't exist
    if (result.netflixSkipIntroAndRecap === undefined) {
        browser.storage.sync.set({"netflixSkipIntroAndRecap": true});
        result.netflixSkipIntroAndRecap = true;
    }

    if (result.netflixAutoClickNextEpisode === undefined) {
        browser.storage.sync.set({"netflixAutoClickNextEpisode": true});
        result.netflixAutoClickNextEpisode = true;
    }

    if (result.netflixAutoClickContinueWatching === undefined) {
        browser.storage.sync.set({"netflixAutoClickContinueWatching": true});
        result.netflixAutoClickContinueWatching = true;
    }

    // set checkbox states to values from storage
    document.getElementById("skip-intro-and-recap").checked = result.netflixSkipIntroAndRecap;
    document.getElementById("auto-click-next-episode").checked = result.netflixAutoClickNextEpisode;
    document.getElementById("auto-click-continue-watching").checked = result.netflixAutoClickContinueWatching;
});
  
// save checkbox state to synced storage when user checks or unchecks a checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        var data = {};
        data[checkbox.value] = checkbox.checked;
        browser.storage.sync.set(data);
    });
});