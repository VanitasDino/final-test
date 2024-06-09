document.addEventListener("DOMContentLoaded", function(){
    const Products = document.getElementById("Products");
    Products.addEventListener("submit", function(event){
        event.preventDefault();
        const titleValue = document.getElementById("titleProducts").value;
        const contentValue = document.getElementById("contentProducts").value;
        const imageValue = document.getElementById("imageProducts").value;
        const priceValue = document.getElementById("priceProducts").value;
        fetch("http://localhost:3000/Products", {
            method: "POST",
            headers: {
                "Content-Type": "applocation/json"
            },
            body: JSON.stringify({
                title: titleValue,
                content: contentValue,
                image: imageValue,
                price: priceValue
            })
        })
    });
});
