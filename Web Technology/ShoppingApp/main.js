let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Apple CPU',
        tag: 'Apple CPU',
        price: 40000,
        incart: 0,
        imgname:1
    },
    {
        name: 'Apple CPU2',
        tag: 'Apple CPU2',
        price: 60000,
        incart: 0,
        imgname:2
    },
    {
        name: 'Apple Phone',
        tag: 'Apple Phone',
        price: 20000,
        incart: 0,
        imgname:3
    },
    {
        name: 'Apple Laptop',
        tag: 'Apple Laptop',
        price: 80000,
        incart: 0,
        imgname:4
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=> {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if( productNumbers ){
        document.querySelector('.cart span').textContent = productNumbers;
    } 
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1;
    }
    else{
        product.incart = 1;
        cartItems = {
            [product.tag]: product
        } 
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("The product price is", cartCost);
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="images/products/${item.imgname}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">₹ ${item.price}</div>
            <div class="quantity">
                <span>${item.incart}</span>
            </div>
            <div class="total">
                ₹ ${item.incart * item.price}
            </div>
            `
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Total Amount
            </h4>
            <h4 class="basketTotal">
                ₹ ${cartCost}
            </h4>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();