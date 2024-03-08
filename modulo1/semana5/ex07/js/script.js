const products = [
    {
        id: 1,
        name: "TV 4k",
        price: 2099.0,
    },
    {
        id: 2,
        name: "PC Gamer",
        price: 3300.0,
    },
    {
        id: 3,
        name: "PS5",
        price: 4300.0,
    },
];

function findByName(array, name) {
    return array.find((item) => item.name.toLowerCase() === name.toLowerCase());
}

function findById(array, id) {
    return array.find((item) => item.id === id);
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

const cart = loadCartFromLocalStorage() || [];

function addToCart(event) {
    event.preventDefault();
    const inputProduct = document.getElementById("inputProduct").value;
    const product = findProduct(inputProduct);

    if (product) {
        cart.push({
            name: product.name,
            price: product.price,
        });

        updateCartLength();
        saveCartToLocalStorage();
    }
}

function updateCartLength() {
    const cartLengthElement = document.getElementById("cartLength");
    cartLengthElement.innerText = cart.length.toString();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : null;
}


function getTotal() {
    let total = 0;

    cart.forEach((element) => {
        total += element.price;
    });

    return total;
}

function showTotalValue() {
    let cartResultElement = document.getElementById("cartResultElement");

    if (!cart.length) {
        cartResultElement.innerText = "Carrinho Vazio";
        return;
    }

    cartResultElement.innerText = `Total R$ ${getTotal()}`;
}
