function showAdAndPlay(url, callback) {
    const adOverlay = document.getElementById('adOverlay');
    const timerSpan = document.getElementById('timer');
    let timeLeft = 5;
    adOverlay.style.display = 'flex';
    const countdown = setInterval(() => {
        timeLeft--;
        timerSpan.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            adOverlay.style.display = 'none';
            callback();
        }
    }, 1000);
}