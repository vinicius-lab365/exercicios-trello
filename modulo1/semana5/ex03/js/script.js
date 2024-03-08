const products = [
    {
        id: 1,
        name: "TV 4k",
        price: 2099.00
    },
    {
        id: 2,
        name: "PC Gamer",
        price: 3300.00
    },
    {
        id: 3,
        name: "PS5",
        price: 4300.00
    }
];


function findByName(array, name) {
    return array.find(item => item.name.toLowerCase() === name.toLowerCase());
}

function findById(array, id) {
    return array.find(item => item.id === id);
}

function findProduct(value) {
    if (!isNaN(value)) {
        return findById(products, parseInt(value));
    }

    return findByName(products, value);
}

function showResult(event) {
    event.preventDefault();
    const result = document.getElementById("result");
    const inputProduct = document.getElementById("inputProduct").value;

    if (!products.length) {
        result.innerText = "Lista de produtos vazia";
        return;
    }

    const product = findProduct(inputProduct);

    if (product) {
        result.innerText = `O valor do produto é: R$ ${product.price}`;
    } else {
        result.innerText = "Produto não encontrado";
    }

    console.log(document.getElementById("result").innerText);
}

const cart = [];

function addToCart(event) {
    event.preventDefault();
    const inputProduct = document.getElementById("inputProduct").value;
    const product = findProduct(inputProduct);

    if (product) {
        cart.push({ 
            name: product.name, 
            price: product.price 
        });
    }

    console.log(cart);
}
