document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const toggleElement = document.getElementById('toggleElement');

    toggleButton.addEventListener('click', () => {
        // Alternar la clase 'mostrar'
        if (toggleElement.classList.contains('mostrar')) {
            toggleElement.classList.remove('mostrar');
        } else {
            toggleElement.classList.add('mostrar');
        }
    });
});