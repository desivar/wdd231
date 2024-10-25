
    document.querySelectorAll('input[type="checkbox"]').forEach(item => {
        item.addEventListener('change', function() {
            if (this.checked) {
                // Trigger confetti
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        });
    });
