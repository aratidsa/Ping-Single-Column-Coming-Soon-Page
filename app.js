/* Declaration */
const form = document.querySelector('.form')
const emailId = document.getElementById('email-id')
const errorMsg = document.createElement('div')
errorMsg.classList.add('error-msg')
errorMsg.textContent = 'Please enter a valid email address.'

/* validate email function */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

/* event listener */
form.addEventListener('submit', function(e) {
    e.preventDefault() // Prevent the form from submitting

    // Remove any existing error message
    const existingErrorMsg = document.querySelector('.error-msg')
    if (existingErrorMsg) {
        existingErrorMsg.remove()
        emailId.classList.remove('error-border')
    }

    // Validate the email address
    if (!emailId.value || !validateEmail(emailId.value)) {
        form.appendChild(errorMsg)
        emailId.classList.add('error-border')
    }
})