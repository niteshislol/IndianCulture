// Code for showing state details when clicking 'Show Details' button
const showDetailsButtons = document.querySelectorAll('.show-details');

showDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const stateCard = button.closest('.state-card');
        let detailsElement = stateCard.querySelector('.state-details');

        // Close all other open state details before opening the current one
        const allDetailsElements = document.querySelectorAll('.state-details');
        allDetailsElements.forEach(details => {
            if (details !== detailsElement) {
                details.style.display = 'none'; // Hide other open details
            }
        });

        if (!detailsElement) {
            detailsElement = document.createElement('div');
            detailsElement.classList.add('state-details');
            detailsElement.innerHTML = `
                <h3>State Cultural Details</h3>
                <p>This is where more cultural details about the state will appear.</p>
            `;
            stateCard.appendChild(detailsElement);
        } else {
            const isHidden = detailsElement.style.display === 'none';
            detailsElement.style.display = isHidden ? 'block' : 'none'; // Toggle visibility
        }
    });
});

// Code for contact form submission
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert('Your message has been sent successfully!');

    contactForm.reset();
});

// Smooth scroll functionality when clicking 'Explore States' button
document.querySelector('.explore-btn').addEventListener('click', () => {
    document.querySelector('#states').scrollIntoView({ behavior: 'smooth' });
});

// Adding hover effect on state cards for a nice transition
const stateCards = document.querySelectorAll('.state-card');

stateCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });

    card.addEventListener('click', () => {
        // Scroll smoothly to the specific state details section
        card.scrollIntoView({ behavior: 'smooth' });
    });
});