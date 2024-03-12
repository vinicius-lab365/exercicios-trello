const elements = document.getElementsByClassName('item-churrasco');

const itensChurrasco = [
    'Cerveja',
    'Carvão',
    'Alcool',
    'Fósforo',
    'Carne',
    'Linguiça',
    'Pão de alho',
    'Farófa',
    'Coração de frango'
]

for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = `${itensChurrasco[i]}`
}

const titulo = document.querySelector('h1');
titulo.classList.add('fs-36');

titulo.classList.remove('fs-36');

titulo.setAttribute("style", "background-color: purple; color: white")
