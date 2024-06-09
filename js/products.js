const ProductsList = document.getElementById("ProductsList");
const url = "http://localhost:3000/Products"
fetch(url)
.then(function (response){
    return response.json();
})
.then (function(Products){
    for(let i=0; i<Products.length; i++){
        const Products = Products[i];
        const li = document.createElement("li");
        li.innerHTML=`
        <h3>${Products.title}</h3>
        <p>${Products.content}</p>
        `
        ProductsList.appendChild(li);
    }
})