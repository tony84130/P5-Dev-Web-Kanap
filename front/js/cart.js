

/* Essai ID numéro 1 */
let id = "107fb5b75607497b96722bda5b504926";

fetch(`http://localhost:3000/api/products/${id}`)
.then(data => data.json())
.then(jsonListArticle => {
    console.log(jsonListArticle.colors);
/*
    document.getElementById("cart__items").innerHTML += 
    `<article class="cart__item" data-id="product-ID" data-color="product-color">
        <div class="cart__item__img">
            <img src="${jsonListArticle.imageUrl}" alt="${jsonListArticle.altTxt}">
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>${jsonListArticle.name}</h2>
                <p>${jsonListArticle.colors}</p>
                <p>${jsonListArticle.price} €</p>
            </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="1">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
    </article>`;
*/

    
});



const validation = document.getElementById("order");

let prenom = document.getElementById("firstName");
let prenom_m = document.getElementById("firstNameErrorMsg");
let prenom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
validation.addEventListener("click", prenom_valid);

let nom = document.getElementById("lastName");
let nom_m = document.getElementById("lastNameErrorMsg");
let nom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
validation.addEventListener("click", nom_valid);

let adresse = document.getElementById("address");

/*
let ville = document.getElementById("city");
let ville_m = document.getElementById("cityErrorMsg");
let ville_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
//validation.addEventListener("click", ville_valid);
*/

let email = document.getElementById("email");


validation.addEventListener("click", (e) => {
  if(!prenom.value || !nom.value || !adresse.value || !ville.value || !email.value) {
    firstNameErrorMsg.innerHTML = "Vous devez renseigner tous les champs !";
    lastNameErrorMsg.innerHTML = "Vous devez renseigner tous les champs !";
    addressErrorMsg.innerHTML = "Vous devez renseigner tous les champs !";
    cityErrorMsg.innerHTML = "Vous devez renseigner tous les champs !";
    emailErrorMsg.innerHTML = "Vous devez renseigner tous les champs !";
    e.preventDefault();
    if(prenom.value) {
      
      firstNameErrorMsg.innerHTML = "Valide !";
      e.preventDefault();
    } else if (nom.value) {
      lastNameErrorMsg.innerHTML = "Valide !";
      e.preventDefault();
    } else if (adresse.value) {
      addressErrorMsg.innerHTML = "Valide !";
      e.preventDefault();
    } else if (ville.value) {
      cityErrorMsg.innerHTML = "Valide !";
      e.preventDefault();
    } else if (email.value) {
      emailErrorMsg.innerHTML = "Valide !";
      e.preventDefault();
    } else {
      
    
    }
  } else if ((prenom_v.test(prenom.value) == false) || (nom_v.test(prenom.value) == false)) {
    prenom_valid(e);
    nom_valid(e);
  } else {

    let panier = [];
    panier.push(cart);

    let commande = {
      contact: {
        prenom: prenom.value,
        nom: nom.value,
        ville: adresse.value,
        addresse: ville.value,
        email: email.value,
      },
      produits: panier,
    };

    

  }
});





function prenom_valid(e){
  if (prenom_v.test(prenom.value) == false) {
    e.preventDefault();
    prenom_m.textContent = "Format incorrect";
    prenom_m.style.color = "orange";
  } else {
    e.preventDefault();
    prenom_m.textContent = "";
  }
}


function nom_valid(e){
  if(nom_v.test(prenom.value) == false) {
    e.preventDefault();
    nom_m.textContent = "Format incorrect";
    nom_m.style.color = "orange";
  } else {
    e.preventDefault();
    nom_m.textContent = "";
  }
}

/*
function ville_valid(e){
  if (ville.validity.valueMissing) {
    e.preventDefault();
    ville_m.textContent = "Ville manquante";
    ville_m.style.color = "red";
  } else if(ville_v.test(ville.value) == false) {
    e.preventDefault();
    ville_m.textContent = "Format incorrect";
    ville_m.style.color = "orange";
  } else {
    e.preventDefault();
    ville_m.textContent = "";
  }
}
*/


/*



*/



function saveBasket(basket) {
  localStorage.setItem("cart", JSON.stringify(basket));
}

function getBasket() {
  let basket = localStorage.getItem("cart");
  if(basket == null) {
    return []; 
  } else {
    return JSON.parse(basket);
  }
}

console.log(getBasket());
console.log(getBasket()[0]);
console.log(getBasket()[0].color);
console.log(getBasket().length);

for (l=0; l < getBasket().length; l++){

  document.getElementById("cart__items").innerHTML += 
    `<article class="cart__item" data-id="product-ID" data-color="product-color">
        <div class="cart__item__img">
            <img src="${getBasket()[l].imageUrl}" alt="${getBasket()[l].altTxt}">
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>${getBasket()[l].name}</h2>
                <p>${getBasket()[l].color}</p>
                <p>${getBasket()[l].price} €</p>
            </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${getBasket()[l].quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
    </article>`;

}


function addBasket(product) {
  let basket = getBasket();
  let foundProduct = basket.find(p => p.id == product.id);
  if(foundProduct != undefined){
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
}

function removeFromBasket(product) {
  let basket = getBasket();
  basket = basket.filter(p => p.id != product.id);
  saveBasket(basket);
}


/*
SUPPRIMER UN PRODUIT DU PANIER

let test1 = document.getElementsByClassName("deleteItem");
console.log(test1);
test1:hover.style.color = "red";

test1.addEventListener("click", test2);

function test2(e){
  storage.removeItem(nomCle);
}
*/

/*
function changeQuantity(product, quantity) {
  let basket = getBasket();
  let foundProduct = basket.find(p => p.id == product.id);
  if(foundProduct != undefined){
    foundProduct.quantity += quantity;
    if(foundProduct.quantity <= 0){
      removeFromBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
}
*/

function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for(let product of basket) {
    number += product.quantity;
  }
  return number;
}

console.log(getNumberProduct());
document.getElementById("totalQuantity").innerHTML = getNumberProduct();

function getTotalPrice() {
  let basket = getBasket();
  let total = 0;
  for(let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
}

console.log(getTotalPrice());
document.getElementById("totalPrice").innerHTML = getTotalPrice();




/*
<!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
<div class="cart__item__img">
  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>Nom du produit</h2>
    <p>Vert</p>
    <p>42,00 €</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article> -->
*/


