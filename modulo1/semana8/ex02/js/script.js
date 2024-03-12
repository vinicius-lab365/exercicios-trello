const elements = document.getElementsByClassName('lista-churrasco');

const produtosChurrasco = [
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
    elements[i].textContent = `${produtosChurrasco[i]}`
}

console.log(elements);