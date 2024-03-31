const addproduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quntity = quntityField.value;
    productField.value='';
    quantityField.value = '';


    console.log(product, quantity);
    displayproduct(product, quantity);
    

}  
const disolayproduct = (product. quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}