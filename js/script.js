// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Welcome message with name
const userNameSpan = document.getElementById('user-name');
const nameInput = document.getElementById('name');
if (nameInput) {
    nameInput.addEventListener('input', function() {
        userNameSpan.textContent = this.value || 'Guest';
    });
}

// Form validation and result display
const form = document.getElementById('contact-form');
const resultDiv = document.getElementById('form-result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    // Clear errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    // Name validation
    const name = form.name.value.trim();
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        valid = false;
    }
    // Email validation
    const email = form.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format.';
        valid = false;
    }
    // Phone validation
    const phone = form.phone.value.trim();
    const phonePattern = /^[0-9\-\+\s\(\)]{7,20}$/;
    if (!phone) {
        document.getElementById('phone-error').textContent = 'Phone number is required.';
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phone-error').textContent = 'Invalid phone number.';
        valid = false;
    }
    // Message validation
    const message = form.message.value.trim();
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required.';
        valid = false;
    }
    if (valid) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<strong>Thank you for your message!</strong><br><br>
        <b>Name:</b> ${name}<br>
        <b>Email:</b> ${email}<br>
        <b>Phone:</b> ${phone}<br>
        <b>Message:</b> ${message}`;
        form.reset();
        userNameSpan.textContent = 'Guest';
    } else {
        resultDiv.style.display = 'none';
    }
});
