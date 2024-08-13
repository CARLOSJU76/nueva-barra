document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navMenu = document.querySelector('.nav-menu');

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});