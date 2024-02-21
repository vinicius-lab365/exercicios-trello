alert("Seja bem vindo ao meu projeto :)")

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light mode';
    } else {
        themeToggleBtn.textContent = 'Dark mode';
    }
}