document.addEventListener('DOMContentLoaded', () => {
    // Select form elements
    const form = document.querySelector('.contact-form');
    const nameInput = document.querySelector('.contact-form input[name="name"]');
    const emailInput = document.querySelector('.contact-form input[name="email"]');
    const messageInput = document.querySelector('.contact-form textarea[name="message"]');
    const successMessage = document.querySelector('.success-message');
    const submitButton = form.querySelector('button[type="submit"]');

    // Initialize EmailJS with Public API Key
    if (emailjs) {
        emailjs.init("asvC-7uOnfD-p7dTE"); // Replace with your actual public key
    } else {
        console.error("EmailJS failed to load.");
        return;
    }

    // Smooth Scroll for Navbar Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission with Validation
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        if (!validateFields()) {
            submitButton.disabled = false;
            submitButton.textContent = "Send";
            return;
        }

        sendEmail();
    });

    // Validate Form Fields
    function validateFields() {
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            return false;
        }
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (!messageInput.value.trim()) {
            alert('Please enter your message.');
            return false;
        }
        return true;
    }

    // Validate Email Format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Send Email via EmailJS
    function sendEmail() {
        const emailData = {
            from_name: nameInput.value,
            from_email: emailInput.value,
            message: messageInput.value,
        };

        emailjs.send("123456789_123456789", "template_rgq7cwg", emailData)
            .then((response) => {
                console.log("Email sent successfully:", response);
                if (successMessage) {
                    successMessage.textContent = "✅ Message sent successfully!";
                    successMessage.style.display = 'block';
                }
                form.reset();
                setTimeout(() => {
                    if (successMessage) successMessage.style.display = 'none';
                }, 3000);
            })
            .catch((error) => {
                console.error("Email send failed:", error);
                alert("❌ Failed to send message. Reason: " + (error.text || "Unknown error"));
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            });
    }
});