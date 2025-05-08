// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    loadNavigation();
    
    // Highlight current page in navigation
    highlightCurrentPage();
    
    // Initialize contact form validation if on contact page
    if (document.body.classList.contains('contact')) {
        initContactForm();
    }
});

function loadNavigation() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <ul>
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="projects.html" class="nav-link">Projects</a></li>
                <li><a href="education.html" class="nav-link">Education</a></li>
                <li><a href="skills.html" class="nav-link">Skills</a></li>
                <li><a href="certifications.html" class="nav-link">Certifications</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        `;
    }
}

function highlightCurrentPage() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.getElementById('name-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('message-error').textContent = '';
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                document.getElementById('name-error').textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                document.getElementById('email-error').textContent = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                document.getElementById('message-error').textContent = 'Message is required';
                isValid = false;
            } else if (message.length < 10) {
                document.getElementById('message-error').textContent = 'Message should be at least 10 characters long';
                isValid = false;
            }
            
            // If form is valid, submit (in a real app, you would send to server)
            if (isValid) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}