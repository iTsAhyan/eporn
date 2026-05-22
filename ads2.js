document.addEventListener("DOMContentLoaded", function() {
    const bottomBanner = document.getElementById("bottomBanner");
    if (bottomBanner) {
        // Replace the inner HTML below with your second ad tag code
        bottomBanner.innerHTML = `
            <a href="https://example.com/ad-target" target="_blank">
                <img src="https://via.placeholder.com/728x90?text=Premium+Banner+Ad+2" alt="Advertisement" style="max-width:100%; height:auto; border-radius:6px;">
            </a>
        `;
    }
});