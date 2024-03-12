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

const listaItensChurrasco = document.getElementById('lista-churrasco')
const meuElemento = document.createElement('li');
let texto = document.createTextNode('Sal grosso');
meuElemento.appendChild(texto);
listaItensChurrasco.appendChild(meuElemento);


const ulElemento = document.getElementById('lista-churrasco');
const liElemento = document.querySelector('.item-churrasco');

ulElemento.removeChild(liElemento);