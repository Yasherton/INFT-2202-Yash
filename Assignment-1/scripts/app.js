/**
 * App.js for My Website
 * Author: Yashjeet Singh
 * Student ID: 100901542
 * Date Completed: 2/5/2024
 */

// Home Page Content Injection
const homePageContent = `
    <div class="container">
        <h1>Introduction</h1>
        <div>
        <p>Hello There, Welcome to my first simple DOM application Website Which is a part of my 
        Web Development Course</p>
        </div>
    </div>`;
// Add the rest of the home page code here

// Product Page Content Injection
const productPageContent = `
    <div class="container">
        <b><h1>Our Favorite Media</h1></b>
        <div>
            <h3>Book: The Alchemist</h3>
            <p>Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. It's a testament to the transforming power of our dreams and the importance of listening to our hearts.</p>
        </div>
        <div>
            <h3>Movie: Inception</h3>
            <p>Christopher Nolan's Inception is a gripping sci-fi thriller that explores the depths of the subconscious mind, blurring the lines between dream and reality. A cinematic journey that challenges perception while delivering an unparalleled visual feast.</p>
        </div>
        <div>
            <h3>Podcast: The Daily</h3>
            <p>Produced by The New York Times, The Daily dives deep into the biggest news stories with journalistic rigor and insight. It's a must-listen for anyone looking to stay informed on global events and understand their broader implications.</p>
        </div>
    </div>`;
// Add the rest of the product page code here

// Services Page Content Injection
const servicesPageContent = `
    <div class="container">
        <h1>Our Services</h1>
        <div>
            <h3>Custom Programming</h3>
            <p>From desktop applications to dynamic websites, our custom programming solutions are tailored to meet your specific business requirements, ensuring functionality and efficiency.</p>
        </div>
        <div>
            <h3>Web Design</h3>
            <p>Our web design services create visually appealing and user-friendly websites that stand out. We focus on creating experiences that engage and captivate your audience.</p>
        </div>
        <div>
            <h3>Mobile Development</h3>
            <p>Our team develops mobile applications that offer seamless user experiences on any device. We bring your mobile app ideas to life, focusing on performance and user engagement.</p>
        </div>
        <p>Check out my <a href="/resume.pdf">resume</a> for more details.</p>
    </div>
`;

// Add the rest of the services page code here

// About Us Page Content Injection
const aboutUsPageContent = `
    <div class="container">
        <h1>About Us</h1>
        <p>We are a team of creative minds and tech enthusiasts who love to create, explore, and share our knowledge with the world. Our journey is filled with learning, innovation, and the constant pursuit of excellence.</p>
        <p>Outside of work, we're involved in community service, enjoy hiking, and are part of a local soccer team. We believe in giving back to the community and finding a healthy work-life balance.</p>
    </div>
`;


// Function to inject content based on the current page
function injectPageContent() {
    const path = window.location.pathname;

    // Inject content for the Home page
    if (path.endsWith("index.html") || path === "/") {
        document.body.innerHTML += homePageContent;
    }
    // Inject content for the Product page
    else if (path.endsWith("product.html")) {
        document.body.innerHTML += productPageContent;
    }
    // Inject content for the Services page
    else if (path.endsWith("services.html")) {
        document.body.innerHTML += servicesPageContent;
    }
    // Inject content for the About Us page
    else if (path.endsWith("about.html")) {
        document.body.innerHTML += aboutUsPageContent;
    }
}

// Function to change 'Product' link text to 'Interests'
function updateNavLinkText() {
    const navLinks = document.querySelectorAll('a'); // Select all anchor tags
    navLinks.forEach(link => {
        if (link.textContent.trim() === 'Product') { // Trim whitespace and check the text content
            link.textContent = 'Interests'; // Change the text content to 'Interests'
        }
    });
}

// Function to add a fixed bottom navbar
function addFixedBottomNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', 'fixed-bottom');
    
    const year = new Date().getFullYear(); // Get the current year
    navbar.innerHTML = `<div class="container-fluid">
                            <span class="navbar-text">&copy; Copyright ${year}</span>
                        </div>`;

    document.body.appendChild(navbar);
}

// Function to handle form submission
function handleFormSubmission() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userData = {
            name: document.getElementById('userName').value,
            contact: document.getElementById('userContact').value,
            email: document.getElementById('userEmail').value,
            message: document.getElementById('userMessage').value,
        };

        console.log('Form Submission:', userData); // Log user data to console

        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to home page after 3 seconds
        }, 3000);
    });
}

// Main function to orchestrate content injection and functionality setup
function main() {
    injectPageContent();
    updateNavLinkText();
    addFixedBottomNavbar();
    handleFormSubmission();
}

// Event listener to run main function after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", main);

