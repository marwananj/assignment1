readme
Portfolio Website
This is the main HTML file for the portfolio website. It structures the content and integrates various sections like navigation, hero, about, projects, testimonials, and contact form. Each section is explained below.
Table of Contents
HTML Structure
Header (Navigation)
Hero Section
About Section
Projects Section
Testimonials Section
Contact Form Section
Footer Section
External Links
Scripts and Interactivity

HTML Structure
1. Header (Navigation)
<header>
    <nav>
        <div class="logo">My Portfolio</div>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
Explanation:

The <header> tag defines the top section of the page, containing the navigation bar.
<nav> is used to wrap the navigation links (<ul> list).
.logo is the brand/logo section, which simply displays the text "My Portfolio."
.nav-links holds the navigation links that correspond to sections on the page (About, Projects, Testimonials, and Contact). Each link (<a href="#id">) has a href attribute pointing to the id of the respective section. When a user clicks a link, the page will smoothly scroll to that section (handled by JavaScript).
2. Hero Section
<section class="hero">
    <h1>Welcome to My Portfolio</h1>
    <p>Discover my work and learn more about me!</p>
    <a href="#projects" class="btn">View My Projects</a>
</section>
Explanation:

The <section class="hero"> defines the hero section at the top of the page, typically a large and visually striking section that introduces the site.
<h1> and <p> provide a welcoming message and a brief description.
The <a> tag with the class btn is a button that links to the projects section (#projects). When clicked, it takes the user to the projects section using smooth scrolling.
3. About Section
<section class="about" id="about">
    <h2>About Me</h2>
    <p>I am a web developer passionate about creating intuitive and user-friendly websites.</p>
</section>
Explanation:

The <section class="about" id="about"> tag represents the "About Me" section of the page. The id="about" allows for linking directly to this section.
The <h2> provides the section title, and the <p> gives a short description about the portfolio owner.
4. Projects Section
<section class="projects" id="projects">
    <h2>My Projects</h2>
    <div class="project-list">
        <div class="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
        </div>
    </div>
</section>

Explanation:

The <section class="projects" id="projects"> tag contains the projects section. The id="projects" allows the smooth scroll functionality when a user clicks the Projects link in the navigation.
The <h2> provides the section title, and the <div class="project-list"> is a container for individual project cards.
Each <div class="project"> represents a single project, with a <h3> for the project title and <p> for a brief description. You can later add more projects or link them to their respective live demos or repositories.
5. Testimonials Section
<section class="testimonials" id="testimonials">
    <h2>What People Are Saying</h2>
    <div class="testimonial-container">
        <div class="testimonial-card active">
            <div class="testimonial-img">A</div>
            <p class="testimonial-text">"This person is amazing!"</p>
            <p class="testimonial-author">- John Doe</p>
        </div>
    </div>
</section>

Explanation:

The <section class="testimonials" id="testimonials"> contains the testimonials section with a heading and a testimonial container.
<div class="testimonial-container"> wraps the individual testimonials.
Each <div class="testimonial-card"> is a single testimonial, including:
<div class="testimonial-img">: Placeholder for the testimonial image or initials.
<p class="testimonial-text">: The testimonial message.
<p class="testimonial-author">: The name of the person giving the testimonial.
The active class on the first testimonial card indicates that it's visible in the slider. You can later modify the slider with JavaScript to cycle through the testimonials.
6. Contact Form Section
<section class="contact" id="contact">
    <h2>Contact Me</h2>
    <form class="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
    </form>
    <p class="success-message" style="display: none;"></p>
</section>
The <section class="contact" id="contact"> is the contact form section, allowing users to get in touch with the portfolio owner.
The <form class="contact-form"> contains the actual form with fields for the user's name, email, and message. Each input field is marked as required to ensure validation in the browser.
The <button> triggers the form submission.
The <p class="success-message"> is used to display a success message once the form is successfully submitted
7. Footer Section
<footer>
    <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
</footer>
Explanation:

The <footer> tag contains the footer content, which generally includes copyright information and any relevant legal disclaimers.
<p> includes the copyright symbol and text.
External Links
<link rel="stylesheet" href="styles.css" />
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js"></script>
<script src="index.js"></script>
Explanation:

The <link> tag includes the external styles.css file to apply the styles to the HTML document.
The <script> tag loads the EmailJS script, which is used for sending emails from the contact form.
The second <script> tag links to the index.js file, which controls form validation, smooth scrolling, and interactivity.
Scripts and Interactivity
The index.js script handles the following interactions:

Smooth Scrolling: When clicking on any navigation link, the page will smoothly scroll to the corresponding section.
EmailJS: Sends the contact form data to your email. It ensures that the form is validated before sending.
Testimonial Slider: Switches between active testimonials (if implemented).

styles.css - Portfolio Website Styles

This is the main CSS file for the portfolio website. It handles the layout, visual design, and responsiveness of the website. Each section of the CSS is explained below.
Table of Contents
Reset and Base Styles
Body Styles
Navigation Styles
Hero Section Styles
About Section Styles
Projects Section Styles
Testimonials Section Styles
Contact Form Styles
Footer Styles
Responsive Design

1. Reset and Base Styles
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

Explanation:

The * selector applies the following styles to all elements on the page:
margin: 0 and padding: 0 remove any default margin or padding applied by the browser.
box-sizing: border-box ensures that padding and border are included in the element's total width and height, making layout management easier.
2. Body Styles
body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.3;
    color: #333;
    background-color: #f8f9fa;
}
Explanation:

The body tag defines the global styles for the page's text:
font-family specifies the font stack used for the page (Inter as the primary font, with fallbacks).
line-height defines the height of each line of text for readability.
color sets the default text color.
background-color changes the background of the entire page to a light gray color (#f8f9fa).
3. Navigation Styles
header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #444;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    height: 60px;
    display: flex;
    align-items: center;
}

nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 3%;
}

.logo {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 1.5rem;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;
    font-size: 0.9rem;
}

.nav-links a:hover {
    color: #ff9f1c;
}
Explanation:

The header tag defines the fixed position navigation bar:

position: fixed ensures the header stays at the top of the page when scrolling.
background-color: #444 gives the navigation bar a dark background.
box-shadow adds a subtle shadow beneath the navigation for visual separation.
height controls the height of the navigation bar.
display: flex and align-items: center center the contents vertically.
The nav tag is a flex container for the logo and navigation links.

justify-content: space-between spaces out the logo and navigation items.
The .logo defines the appearance of the brand/logo text.

The .nav-links styles the list of links in the navigation bar.

list-style: none removes bullet points from the list.
The .nav-links a styles the anchor links, making them white with no underline and adding a hover effect.

4. Hero Section Styles
.hero {
    background-color: #f89c1c;
    color: white;
    padding: 15px 15px;
    margin: 90px 45px 10px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.btn {
    display: inline-block;
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    background-color: white;
    color: #f89c1c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
}
Explanation:

The .hero class styles the hero section, typically the first large section seen on the page.
background-color gives the hero section a bright orange color (#f89c1c).
display: flex and flex-direction: column center the content vertically and arrange elements in a column.
The .btn class styles the button within the hero section.
The button has white text on an orange background, and a hover effect that slightly lifts the button.
5. About Section Styles
.about {
    background: white;
    padding: 50px 20px;
}

.about h2 {
    font-size: 1.8rem;
    font-weight: bold;
}

.about p {
    font-size: 1rem;
    max-width: 800px;
    margin: 10px auto;
    line-height: 1.6;
}
Explanation:

The .about section is styled with white background and padding to give it space.
The <h2> defines the title of the section with a larger font size and bold text.
The <p> sets the paragraph's font size, maximum width, margin, and line height to improve readability.
6. Projects Section Styles
.projects {
    padding: 40px 10px;
}

.projects h2 {
    font-size: 1.6rem;
    font-weight: bold;
}

.project-list {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.project {
    background: #f8f8f8;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 180px;
}

.project h3 {
    font-size: 1rem;
}
Explanation:

The .projects section has padding to create spacing.
The .project-list uses flexbox to display project cards in a row, with a gap between them.
The .project card has a light background, padding, rounded corners, and a subtle shadow to make it visually distinct.
The <h3> inside each project card is styled to make the project title smaller.
7. Testimonials Section Styles
.testimonials {
    background: #f4f4f4;
    padding: 50px 20px;
    text-align: center;
}

.testimonials h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.testimonial-container {
    position: relative;
    max-width: 600px;
    margin: auto;
    height: 200px;
    overflow: hidden;
}

.testimonial-card {
    position: absolute;
    width: 100%;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 1s ease, transform 1s ease;
}

.testimonial-card.active {
    opacity: 1;
    transform: translateX(0);
}

.testimonial-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #666;
    margin: auto;
    margin-bottom: 15px;
}

.testimonial-text {
    font-style: italic;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
}

.testimonial-author {
    font-weight: bold;
    font-size: 1rem;
    color: #666;
}
Explanation:

The .testimonials section has a light gray background and padding for spacing.
The .testimonial-container and .testimonial-card use positioning and transitions to create a sliding testimonial effect.
The .testimonial-img is a circular placeholder for the testimonial image or initials.
The .testimonial-text and .testimonial-author define the appearance of the testimonial content (text and author).
8. Contact Form Styles
.contact-form {
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-bottom: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 0.6rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.85rem;
}

.contact-form textarea {
    min-height: 100px;
    resize: vertical;
}

.contact-form button {
    padding: 0.6rem 1.2rem;
    background-color: #ff9f1c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.85rem;
}

.contact-form button:hover {
    background-color: #f39200;
}
Explanation:

The .contact-form is a flex container for the form fields.
The <input> and <textarea> are styled with padding, borders, and border-radius to look clean and modern.
The <button> is styled with a distinct orange background and a hover effect.

9. Footer Styles
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 15px 0;
    margin-top: 20px;
}
Explanation:

The footer has a dark background with white text, centered content, and padding to create space.
10. Responsive Design
@media (max-width: 768px) {
    body {
        font-size: 0.85rem;
    }

    header {
        padding: 0 2%;
    }

    .hero {
        padding: 1.5rem 5%;
        margin: 80px 40px 10px;
    }

    .hero h1 {
        font-size: 1.3rem;
    }

    .about h2 {
        font-size: 1.6rem;
    }

    .about p {
        font-size: 0.85rem;
    }

    .project-list {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .contact-form {
        max-width: 100%;
    }
}
Explanation:

The @media query is used to apply styles for devices with a screen width of 768px or less (e.g., tablets and phones).
The text size and layout are adjusted for smaller screens to ensure readability and a good user experience.

index.js
Table of Contents
DOMContentLoaded Event Listener
EmailJS Initialization
Smooth Scroll for Navbar Links
Form Submission with Validation
Field Validation
Email Validation
Send Email via EmailJS
Success and Error Handling
1 DOMContentLoaded Event Listener

document.addEventListener('DOMContentLoaded', () => {
    // Select form elements
    const form = document.querySelector('.contact-form');
    const nameInput = document.querySelector('.contact-form input[name="name"]');
    const emailInput = document.querySelector('.contact-form input[name="email"]');
    const messageInput = document.querySelector('.contact-form textarea[name="message"]');
    const successMessage = document.querySelector('.success-message');
    const submitButton = form.querySelector('button[type="submit"]');
Explanation:

This part of the code waits for the DOMContentLoaded event to ensure that the DOM (HTML) is fully loaded before running the JavaScript code.
Once the event is triggered, it selects the HTML elements of the contact form (name input, email input, message input, success message, and submit button) using document.querySelector.
2. EmailJS Initialization
// Initialize EmailJS with Public API Key
if (emailjs) {
    emailjs.init("asvC-7uOnfD-p7dTE"); // Replace with your actual public key
} else {
    console.error("EmailJS failed to load.");
    return;
}
Explanation:

This code initializes EmailJS using your public API key (replace with your actual key).
It checks if the emailjs object is available (i.e., EmailJS has loaded correctly). If not, an error message is logged.
3. Smooth Scroll for Navbar Links
// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
Explanation:

This block of code applies smooth scrolling behavior to all anchor links (i.e., links that start with #, such as #about, #projects, etc.).
When a user clicks on one of these links, the page will smoothly scroll to the corresponding section instead of jumping directly.
4. Form Submission with Validation
// Form Submission with Validation
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
Explanation:

This part listens for the submit event on the contact form.
When the form is submitted, the default behavior (reloading the page) is prevented using event.preventDefault().
The submit button is disabled, and its text changes to "Sending..." to indicate the form is being processed.
5. Field Validation
if (!validateFields()) {
    submitButton.disabled = false;
    submitButton.textContent = "Send";
    return;
}
Explanation:

After the form is submitted, the code calls the validateFields function to ensure that all form fields (name, email, and message) are properly filled out.
If the validation fails (i.e., returns false), the submit button is re-enabled, and its text reverts to "Send". The form submission is then stopped with return.
6. Email Validation
// Validate Email Format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
Explanation:

This function checks if the email entered by the user is in a valid format.
It uses a regular expression (regex) to ensure that the email address contains characters before and after the @, and a period . after the @.
7. Send Email via EmailJS
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
Explanation:

The sendEmail function is called after the form has been validated.
It gathers the form data (name, email, and message) and creates an emailData object.
emailjs.send sends the email using the specified EmailJS service ID (123456789_123456789), template ID (template_rgq7cwg), and the form data.
If the email is sent successfully, a success message is displayed, and the form is reset.
If the email fails, an error message is shown to the user.
8. Success and Error Handling
.catch((error) => {
    console.error("Email send failed:", error);
    alert("❌ Failed to send message. Reason: " + (error.text || "Unknown error"));
})
.finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = "Send";
});
Explanation:

If the EmailJS request fails, the .catch block is executed, logging the error to the console and displaying an alert to the user with the error message.
The .finally block is executed after the email attempt, regardless of success or failure. It re-enables the submit button and restores the "Send" text on the button.
Summary:
DOMContentLoaded: Waits for the page to load before executing JavaScript.
EmailJS Initialization: Initializes the EmailJS service with your public API key.
Smooth Scroll: Adds smooth scrolling functionality for anchor links.
Form Submission: Handles form submission, validates fields, and sends the email via EmailJS.
Field Validation: Checks that all required fields are filled out correctly.
Email Validation: Validates the email address format.
Email Sending: Sends an email using EmailJS and handles success/error messages.
This script ensures that your contact form works smoothly, sends emails via EmailJS, and provides feedback to the user.

