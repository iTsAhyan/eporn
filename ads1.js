document.addEventListener("DOMContentLoaded", function() {
    const topBanner = document.getElementById("topBanner");
    if (topBanner) {
        // Replace the inner HTML below with your third-party ad network's script or HTML tag
        topBanner.innerHTML = `
            <a href="https://example.com/ad-target" target="_blank">
                <img src="https://via.placeholder.com/728x90?text=Premium+Banner+Ad+1" alt="Advertisement" style="max-width:100%; height:auto; border-radius:6px;">
            </a>
        `;
    }
});