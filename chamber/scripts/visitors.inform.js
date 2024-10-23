document.addEventListener("DOMContentLoaded", () => {
    const visitorInfo = document.getElementById("visitor-info");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();

    // Define message variations based on time intervals
    const messages = {
        firstVisit: "Welcome! It's your first time here. Let us know if you have any questions.",
        backSoon: "Back so soon? We're happy to see you again!",
        oneDay: "You last visited just yesterday. Great to have you back!",
        fewDays: "It's been a few days since your last visit. How have you been?",
        longTime: "It's been a while! We've missed you."
    };

    if (!lastVisit) {
        visitorInfo.textContent = messages.firstVisit; // First time visit
    } else {
        const timeDiff = currentTime - parseInt(lastVisit, 10);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (timeDiff < 24 * 60 * 60 * 1000) {
            visitorInfo.textContent = messages.backSoon; // Back within 24 hours
        } else if (daysDiff === 1) {
            visitorInfo.textContent = messages.oneDay; // Last visited 1 day ago
        } else if (daysDiff <= 7) {
            visitorInfo.textContent = messages.fewDays; // Last visited within 2 to 7 days
        } else {
            visitorInfo.textContent = messages.longTime; // Last visited more than 7 days ago
        }
    }

    // Update localStorage with the current time
    localStorage.setItem("lastVisit", currentTime.toString());
});

