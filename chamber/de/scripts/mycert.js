// Function to update progress for certificates
function updateProgress(certificate, totalClasses) {
    const completedClasses = document.querySelectorAll(`.certificate:nth-of-type(${certificate}) input[type="checkbox"]:checked`).length;
    const progress = (completedClasses / totalClasses) * 100;

    const progressBar = document.getElementById(`progress${certificate}`);
    if (progressBar) {
        progressBar.value = progress;
    }

    const messageBox = document.getElementById('messages');
    if (messageBox) {
        messageBox.innerHTML = ''; // Clear previous messages

        if (completedClasses === totalClasses) {
            messageBox.innerHTML = `<p>🎉 Congratulations! You've completed Certificate ${certificate}! 🎉</p>`;
            // Trigger confetti for certificate completion if needed
            if (certificate === 5){
                showConfetti();
            }
        } else {
            messageBox.innerHTML = `<p>You have completed ${completedClasses} out of ${totalClasses} classes for Certificate ${certificate}. Keep going!</p>`;
        }
    }
}

// Function to update progress for the general and religion classes in the sidebar
function updateSidebarProgress(type) {
    const totalClasses = type === 'general' ? 12 : 7;
    const completedClasses = document.querySelectorAll(`#${type}-classes input[type="checkbox"]:checked`).length;
    const progress = (completedClasses / totalClasses) * 100;

    const messageBox = document.getElementById('messages');
    if (messageBox) {
        messageBox.innerHTML = ''; // Clear previous messages

        if (completedClasses === totalClasses) {
            messageBox.innerHTML = `<p>🎉 Congratulations! You've completed all ${type} classes! 🎉</p>`;
        } else {
            messageBox.innerHTML = `<p>You have completed ${completedClasses} out of ${totalClasses} ${type} classes. Keep going!</p>`;
        }
    }
}

// Function to display congratulations message when a degree is completed
function checkDegreeCompletion(degreeType) {
    const messageBox = document.getElementById('messages');
    if (messageBox) {
        messageBox.innerHTML = `<p>🎉 Congratulations! You've completed your ${degreeType} Degree in Software Development! 🎉</p>`;
        showConfetti(); //trigger confetti when degree is completed.
    }
}

// Event delegation example (optional, for better performance)
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('change', (event) => {
            if (event.target.matches('#general-classes input[type="checkbox"]')) {
                updateSidebarProgress('general');
            } else if (event.target.matches('#religion-classes input[type="checkbox"]')) {
                updateSidebarProgress('religion');
            }
        });
    }

    const content = document.querySelector('.content');
    if (content){
        content.addEventListener('change', (event) => {
            if (event.target.matches('.certificate input[type="checkbox"]')) {
                const certificate = event.target.closest('.certificate');
                if (certificate) {
                    const index = Array.from(certificate.parentElement.children).indexOf(certificate) + 1;
                    let totalClasses = 0;
                    if(index === 1){
                        totalClasses = 4;
                    } else if (index === 2){
                        totalClasses = 6;
                    } else if (index === 3){
                        totalClasses = 5;
                    } else if (index === 4){
                        totalClasses = 7;
                    } else if (index === 5){
                        totalClasses = 3;
                    }

                    updateProgress(index, totalClasses);
                }
            }
        });
    }

});
