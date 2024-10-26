let uploadedFile = null; // Placeholder for file handling, if needed

// Function to update progress for certificates
function updateProgress(certificate, totalClasses) {
    // Count the completed classes for the specific certificate
    const completedClasses = document.querySelectorAll(`.certificate:nth-of-type(${certificate}) input[type="checkbox"]:checked`).length;
    const progress = (completedClasses / totalClasses) * 100;

    // Update the progress bar for the certificate
    const progressBar = document.getElementById(`progress${certificate}`);
    if (progressBar) {
        progressBar.value = progress;
    }

    const messageBox = document.getElementById('messages');
    if (messageBox) {
        messageBox.innerHTML = ''; // Clear previous messages

        if (completedClasses === totalClasses) {
            messageBox.innerHTML = `
                <p>🎉 Congratulations! You've completed Certificate ${certificate}! 🎉</p>
            `;
        } else {
            messageBox.innerHTML = `<p>You have completed ${completedClasses} out of ${totalClasses} classes for Certificate ${certificate}. Keep going!</p>`;
        }
    }
}

// Function to update progress for the general and religion classes in the sidebar
function updateSidebarProgress(type) {
    // Set total classes based on the type
    const totalClasses = type === 'general' ? 12 : 7;
    const completedClasses = document.querySelectorAll(`#${type}-classes input[type="checkbox"]:checked`).length;
    const progress = (completedClasses / totalClasses) * 100;

    const messageBox = document.getElementById('messages');
    if (messageBox) {
        messageBox.innerHTML = ''; // Clear previous messages

        if (completedClasses === totalClasses) {
            messageBox.innerHTML = `
                <p>🎉 Congratulations! You've completed all ${type} classes! 🎉</p>
            `;
        } else {
            messageBox.innerHTML = `<p>You have completed ${completedClasses} out of ${totalClasses} ${type} classes. Keep going!</p>`;
        }
    }
}

// Function to display congratulations message when a degree is completed
function checkDegreeCompletion(degreeType) {
    const messageBox = document.getElementById('messages');
    messageBox.innerHTML = `<p>🎉 Congratulations! You've completed your ${degreeType} Degree in Software Development! 🎉</p>`;
}

