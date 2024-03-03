 const sidelinks=[
    {
        id:0,
        value:"Official store"
    },
    {
        id:1,
        value:"Fashion"
    },
    {
        id:3,
        value:"Adult"
    },
    {
        id:4,
        value:"Children"
    },
    {
        id:5,
        value:"Uni-sex"
    },
]

const link = document.getElementById("link");


for (var item = 0; item <=sidelinks.length; item++){
    console.log(sidelinks[item].value)
    link.innerText= sidelinks[item].value
}

// classes
//create a class with constructor title, amount, remaining items, add to cart
class Product{
    constructor(title, amount,reminingItems){
        this.title = title,
        this.amount = amount,
        this.reminingItems = reminingItems
    }
    getItems(){
        console.log(this.title,this.amount,this.reminingItems)
    }
    addToCart(){
        //take items inside the cart and add one 
    }
}

const Product1 = new Product("shoes",234,4)


//to-do on 3rd march
/*
check on functions,classes, loops and javascript inbuilt methods
Add icons to the navbar links
 */