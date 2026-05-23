// পপআপ তৈরি এবং স্টাইল করার ফাংশন
function createAgeGate() {
    const ageGateHTML = `
        <div id="age-gate" style="position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:99999; display:flex; align-items:center; justify-content:center; text-align:center; color:#fff; padding:20px;">
            <div style="background:#121212; padding:30px; border-radius:8px; border:1px solid #333; max-width:400px;">
                <h1 style="color:#ff9900; margin-bottom:15px;">Age Verification</h1>
                <p style="margin-bottom:20px; font-size:14px; color:#ccc;">This site contains adult content. You must be 18+ to enter.</p>
                <div style="display:flex; gap:10px; justify-content:center;">
                    <button id="confirmBtn" style="padding:10px 20px; border:none; border-radius:4px; cursor:pointer; font-weight:bold; background:#ff9900; color:#000;">I am 18+</button>
                    <button id="exitBtn" style="padding:10px 20px; border:none; border-radius:4px; cursor:pointer; font-weight:bold; background:#333; color:#fff;">Exit</button>
                </div>
            </div>
        </div>
    `;

    // পপআপটি বডিতে ইনজেক্ট করা
    document.body.insertAdjacentHTML('beforeend', ageGateHTML);

    // বাটন ইভেন্ট হ্যান্ডলার
    document.getElementById('confirmBtn').addEventListener('click', () => {
        document.getElementById('age-gate').style.display = 'none';
        localStorage.setItem('ageVerified', 'true');
    });

    document.getElementById('exitBtn').addEventListener('click', () => {
        window.location.href = 'privacy.html';
    });
}

// সাইট লোড হওয়ার সময় চেক করা
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('ageVerified') !== 'true') {
        createAgeGate();
    }
});