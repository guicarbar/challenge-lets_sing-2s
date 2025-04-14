document.addEventListener('DOMContentLoaded', function() {
    // Set up references to elements
    const timerElement = document.getElementById('timer');
    const digitInputs = [
        document.getElementById('digit-0'),
        document.getElementById('digit-1'),
        document.getElementById('digit-2'),
        document.getElementById('digit-3'),
        document.getElementById('digit-4'),
        document.getElementById('digit-5')
    ];
    const resendButton = document.getElementById('resend-btn');
    const verifyButton = document.getElementById('verify-btn');
    const problemButton = document.getElementById('problem-btn');
    
    // Initialize timer
    let timeRemaining = 2700; // 45 minutes in seconds
    
    // Format time function
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} segundos`;
    }
    
    // Start timer
    const timer = setInterval(function() {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            timeRemaining = 0;
        }
        timerElement.textContent = formatTime(timeRemaining);
    }, 1000);
    
    // Set up input handling for digit fields
    digitInputs.forEach((input, index) => {
        if (index >= 3) { // Only add event listeners to the editable fields
            input.addEventListener('input', function(e) {
                // Allow only numbers
                this.value = this.value.replace(/[^0-9]/g, '');
                
                if (e.target.value.length === 1) {
                    // Move to next input if available
                    if (index < 5) {
                        digitInputs[index + 1].focus();
                    }
                }
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && e.target.value === '') {
                    // Move to previous input if current is empty
                    if (index > 0) {
                        digitInputs[index - 1].focus();
                    }
                }
            });
        }
    });
    
    // Resend code function
    function resendCode() {
        // Reset timer
        timeRemaining = 2700;
        timerElement.textContent = formatTime(timeRemaining);
        
        // Clear the last three inputs
        digitInputs[3].value = '';
        digitInputs[4].value = '';
        digitInputs[5].value = '';
        
        // Focus on the first editable input
        digitInputs[3].focus();
    }
    
    // Verify code function
    function verifyCode() {
        const code = digitInputs.map(input => input.value).join('');
        alert('Código enviado para verificação: ' + code);
    }
    
    // Add event listeners to buttons
    resendButton.addEventListener('click', resendCode);
    problemButton.addEventListener('click', resendCode);
    verifyButton.addEventListener('click', verifyCode);
    
    // Focus on the first editable input on page load
    digitInputs[3].focus();
});