document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Button clicked!');
        });
    });
});
