let uploadedFile = null;

// Function to update progress for certificates
function updateProgress(certificate, totalClasses) {
    const completedClasses = document.querySelectorAll(`.certificate:nth-of-type(${certificate}) input[type="checkbox"]:checked`).length;
    const progress = (completedClasses / totalClasses) * 100;

    // Update the progress bar for the certificate
    document.getElementById(`progress${certificate}`).value = progress;

    const messageBox = document.getElementById('messages');
    messageBox.innerHTML = ''; // Clear previous messages

    if (completedClasses === totalClasses) {
        messageBox.innerHTML = `
            <p>🎉 Congratulations! You've completed Certificate ${certificate}! 🎉</p>
        `;
    } else {
        messageBox.innerHTML = `<p>You have completed ${completedClasses} out of ${totalClasses} classes for Certificate ${certificate}. Keep going!</p>`;
    }
}

// Function to update progress for the general and religion classes
function updateSidebarProgress(type) {
    let totalClasses = type === 'general' ? 12 : 7; // 12 for general classes, 7 for religion classes
    let completedClasses = document.querySelectorAll(`#${type}-classes input[type="checkbox"]:checked`).length;
    let progress = (completedClasses / totalClasses) * 100;

    const messageBox = document.getElementById('messages');
    messageBox.innerHTML = ''; // Clear previous messages

    if (completedClasses === totalClasses) {
        messageBox.innerHTML = `
            <p>🎉 Congratulations! You've completed all ${type} classes! 🎉</p>
        `;
    } else {
        messageBox.innerHTML = `<p>You have completed ${completedClasses} out of ${totalClasses} ${type} classes. Keep going!</p>`;
    }
}
