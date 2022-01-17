

/*
class Article {
    constructor(jsonArticle) {
        jsonArticle && Object.assign(this, jsonArticle);
        this.name = jsonArticle.name;
        this.price = jsonArticle.price;
        this.imageUrl = jsonArticle.imageUrl;
        this.altTxt = jsonArticle.altTxt;
        this.description = jsonArticle.description;
    }
}
*/



fetch("http://localhost:3000/api/products")
    .then(data => data.json())
    .then(jsonListArticle => {
        console.log(jsonListArticle);

        for (i=0; i < jsonListArticle.length; i++){
            document.getElementById("items").innerHTML += "<a href="+ `product.html?id=${jsonListArticle[i]._id}` +"> <article>" + "<img src=\"" + jsonListArticle[i].imageUrl + "\" alt=\"" + jsonListArticle[i].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[i].name + "</h3> <p class='productDescription'>" + jsonListArticle[i].description + "</p> </article> </a>";

        }

        /*
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[1].imageUrl + "\" alt=\"" + jsonListArticle[1].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[1].name + "</h3> <p class='productDescription'>" + jsonListArticle[1].description + "</p> </article> </a>";
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[2].imageUrl + "\" alt=\"" + jsonListArticle[2].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[2].name + "</h3> <p class='productDescription'>" + jsonListArticle[2].description + "</p> </article> </a>";
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[3].imageUrl + "\" alt=\"" + jsonListArticle[3].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[3].name + "</h3> <p class='productDescription'>" + jsonListArticle[3].description + "</p> </article> </a>";
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[4].imageUrl + "\" alt=\"" + jsonListArticle[4].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[4].name + "</h3> <p class='productDescription'>" + jsonListArticle[4].description + "</p> </article> </a>";
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[5].imageUrl + "\" alt=\"" + jsonListArticle[5].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[5].name + "</h3> <p class='productDescription'>" + jsonListArticle[5].description + "</p> </article> </a>";
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[6].imageUrl + "\" alt=\"" + jsonListArticle[6].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[6].name + "</h3> <p class='productDescription'>" + jsonListArticle[6].description + "</p> </article> </a>";
        document.getElementById("items").innerHTML += "<a href=''> <article>" + "<img src=\"" + jsonListArticle[7].imageUrl + "\" alt=\"" + jsonListArticle[7].altTxt + "\"> <br> <h3 class='productName'>" + jsonListArticle[7].name + "</h3> <p class='productDescription'>" + jsonListArticle[7].description + "</p> </article> </a>";
        */



        /*

        document.getElementById("items").innerHTML += "<h3>" + jsonListArticle[3].name + "<br>" + jsonListArticle[3].price + "<br>" + jsonListArticle[3].imageUrl + "<br>" + jsonListArticle[3].altTxt + "<br>" + jsonListArticle[3].description + "</h3>";
        

        for(let jsonArticle in jsonListArticle) {
            let article = new Article(jsonArticle);
            document.getElementById("items").innerHTML += "<h3>" + jsonListArticle[1].name + "</h3><h4>" + jsonListArticle[1].price + "</h4> " + "<img src=\"" + jsonListArticle[1].imageUrl + "\" alt=\"" + jsonListArticle[1].altTxt + "\">" + "<p>" + jsonListArticle[1].description + "</p>";
        }


        class Article {
            constructor(jsonArticle) {
                jsonArticle && Object.assign(this, jsonArticle);
            }

            getFormatedDate(article){
                let timestamp = Date.parse(this.publicationDate);
                let date = new Date(timetamp);
                return date.toLocaleDateString();
            }
        }

        */
});