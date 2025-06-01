document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
        targetElement.classList.add('fade-in');
    });
});

// Add fade-in effect for sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-out');
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-out');
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
