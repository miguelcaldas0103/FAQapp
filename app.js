const modal = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content .answer');
const buttons = document.querySelectorAll('.btn');

const answers = [
    'Yes, we accept Visa and MasterCard.',
    'We support local farmers by sending them a 5% commission on every product.',
    'All ingredients are organic, provided by our certified farmers.'
];

// Add event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modal.classList.add('show'); // Ensure class matches CSS
        modalContent.textContent = answers[index];
    });
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show'); // Ensure class matches CSS
    }
});