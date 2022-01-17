


function getId() {
    return  new URLSearchParams(window.location.search).get("id");
}

console.log(getId());



/*
const id = URLParams(window.location.search).get("id");
console.log("id");



Essai ID numéro 1 
let id = "107fb5b75607497b96722bda5b504926";
*/


fetch(`http://localhost:3000/api/products/${getId()}`)
    .then(data => data.json())
    .then(jsonListArticle => {
        console.log(jsonListArticle);
        console.log(jsonListArticle.colors);

        document.querySelector(".item__img").innerHTML += "<img src=\"" + jsonListArticle.imageUrl + "\" alt=\"" + jsonListArticle.altTxt + "\">";

        document.getElementById("title").innerHTML += jsonListArticle.name;
    
        document.getElementById("price").innerHTML += jsonListArticle.price;

        document.getElementById("description").innerHTML += jsonListArticle.description;


        let colorSelect = document.getElementById("colors");
        for (let i = 0; i < jsonListArticle.colors.length; i++) {
            let newOption = document.createElement("option");
            newOption.innerText += jsonListArticle.colors[i];
            colorSelect.appendChild(newOption);
        }
        

    const button = document.getElementById("addToCart")
    button.addEventListener("click", (e) => {
    const color = document.getElementById("colors").value;
    const quantity = document.getElementById("quantity").value;
    if((color == null || color == "") && (quantity == null || quantity == 0)) {
        alert("Veuillez séléctionner une couleur et une quantité");
        return;
    } else if (color == null || color == "") {
        alert("Veuillez séléctionner une couleur");
        return;
    } else if (quantity == null || quantity == 0) {
        alert("Veuillez séléctionner une quantité");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    

    if(cart) { // existe déjà

        // 1. la meme couleure -> augmente la quté
        // 2. ont considere tout les autres produit différe


        let test = cart.filter( item => item.id === jsonListArticle._id && item.color === color );
        console.log(test);


        cart.forEach(product => {
            if(jsonListArticle._id == product.id && color == product.color) {
                product.quantity += Number(quantity);
        //localStorage.setItem("cart",JSON.stringify(cart));

                //break;
            } else if (jsonListArticle._id == product.id && color != product.color){
                const data = {
                    id: getId(),
                    color: color,
                    quantity: Number(quantity),
                    imageUrl: jsonListArticle.imageUrl,
                    altTxt: jsonListArticle.altTxt,
                    name: jsonListArticle.name,
                    price: jsonListArticle.price
                }
                cart.push(data);
        //localStorage.setItem("cart",JSON.stringify(cart));

                //break;
            } else if (jsonListArticle._id != product.id) {
                const data = {
                    id: getId(),
                    color: color,
                    quantity: Number(quantity),
                    imageUrl: jsonListArticle.imageUrl,
                    altTxt: jsonListArticle.altTxt,
                    name: jsonListArticle.name,
                    price: jsonListArticle.price
                }
                cart.push(data);
        //localStorage.setItem("cart",JSON.stringify(cart));

                //break;
            } else {
                
            }
        });
        localStorage.setItem("cart",JSON.stringify(cart));

    } else {
        let cart = [];
        const data = {
            id: getId(),
            color: color,
            quantity: Number(quantity),
            imageUrl: jsonListArticle.imageUrl,
            altTxt: jsonListArticle.altTxt,
            name: jsonListArticle.name,
            price: jsonListArticle.price
        }
        cart.push(data);
        localStorage.setItem("cart",JSON.stringify(cart))

    }
    

    //window.location.href = "cart.html"
    });
});



/*

document.getElementById("addToCart").forEach(star => {
    star.addEventListener("click", function(){
        addFavorites(this.dataset.id);
    })
})

function addFavorites(articlesId) {
    let listFavorites = getFavorites();
    listFavorites.push(articlesId);
    saveFavorites(listFavorites);
}

function getFavorites() {
    let listFavorites = localStorage.getItem("listFavorites");
    if(listFavorites == null) {
        return [];
    } else {
        return JSON.parse(listFavorites);
    }
}

function saveFavorites(listFavorites){
    localStorage.setItem("listFavorites", JSON.stringify(listFavorites));
}

 
*/




