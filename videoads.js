function triggerPreRollAd(mainM3u8Url, hlsPlayerElement, initializePlyrCallback) {
    const modalContent = document.querySelector('.modal-content');
    
    // 1. Remove existing ad elements if any exist
    const oldAdContainer = document.getElementById('adOverlayContainer');
    if (oldAdContainer) oldAdContainer.remove();

    // 2. Create Skip Ad Overlay structure
    const adContainer = document.createElement('div');
    adContainer.id = 'adOverlayContainer';
    adContainer.style.cssText = 'position:absolute; bottom:60px; right:20px; z-index:2147483647; pointer-events:auto;';

    const skipBtn = document.createElement('button');
    skipBtn.id = 'skipAdBtn';
    skipBtn.disabled = true;
    skipBtn.style.cssText = 'background:rgba(0,0,0,0.8); color:#fff; border:1px solid #ff9900; padding:10px 20px; font-weight:bold; cursor:pointer; border-radius:4px; font-size:14px;';
    
    adContainer.appendChild(skipBtn);
    modalContent.appendChild(adContainer);

    let countdown = 5; // 5 seconds mandatory watch time
    skipBtn.innerText = `Skip Ad in ${countdown}s`;

    const timer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(timer);
            skipBtn.disabled = false;
            skipBtn.innerText = "Skip Ad ➔";
            skipBtn.style.background = "#ff9900";
            skipBtn.style.color = "#000";
        } else {
            skipBtn.innerText = `Skip Ad in ${countdown}s`;
        }
    }, 1000);

    // 3. Play the ad video first
    // Replace this source URL with your VAST mp4 video ad source url link
    hlsPlayerElement.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
    hlsPlayerElement.load();
    hlsPlayerElement.play().catch(e => console.log("Auto-play blocked, waiting for user interaction"));

    // 4. Action when Skip button is clicked
    skipBtn.onclick = function(e) {
        e.stopPropagation();
        clearInterval(timer);
        adContainer.remove();
        
        // Load the actual stream content requested by user
        initializePlyrCallback(mainM3u8Url);
    };
}