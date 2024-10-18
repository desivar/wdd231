document.addEventListener("DOMContentLoaded", () => {
    const visitorInfo = document.getElementById("visitor-info");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();

    if (!lastVisit) {
        visitorInfo.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDiff = currentTime - parseInt(lastVisit, 10);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (timeDiff < 24 * 60 * 60 * 1000) {
            visitorInfo.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            visitorInfo.textContent = "You last visited 1 day ago.";
        } else {
            visitorInfo.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }

    // Update localStorage with the current time
    localStorage.setItem("lastVisit", currentTime.toString());
});
