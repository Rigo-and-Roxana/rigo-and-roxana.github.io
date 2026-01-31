// Set the wedding date (YYYY, MM-1, DD, HH, MM, SS)
// Note: JavaScript months are 0-indexed (0 = January, 10 = November)
const weddingDate = new Date(2027, 0, 16, 16, 0, 0); // January 16, 2027, 4:00 PM

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate.getTime() - now;
    
    if (timeLeft < 0) {
        // Wedding day has arrived or passed
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update the display
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
