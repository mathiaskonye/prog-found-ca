// Question 1

var humanFashon = "This human needs some yellow sneakers";

// Question 2
var person = {
    name: "stewart",
    age: 37
};
// Question 3
var outOfStock = true

if (outOfStock === true) {
    console.log("Out of stock");
}
else if (outOfstock === false) {
    console.log("In stock");
}

// Question 4

var shoeSize = [40,41,42,43,44];

for (var i=0; i <=shoeSize.length; i++){
    console.log(shoeSize[i]);
};

// Question 5

for (var count = 15; count <= 25; count++) {
    console.log(count);
}

// Question 6

for (var count = 15; count <= 25; count++) {
    if (count === 20) {
        console.log(count);
    }
}

// Question 7

var shoes=[ 
    {
        name:"adidas",
        size:43,
        outOfStock:true,
    },
    {
        name:"Nike",
        size:43,
        outOfStock:false,
    }
]

for (var i = 0; i < shoes.length; i++) {
    console.group(shoes[i].size);
    console.group(shoes[i].outOfStock);
}


// Question 8

function whatIdontLike(arg) {
    console.log("I dont like",arg);
}
whatIdontLike("Old shoes");

// Question 9

function shoeSize(size1, size2) {
    return size1 - size2;
};
shoeSize(80,42);

// Question 10

var newShoes = [];

function putInArray(stuff){
    newShoes.push(stuff);
}

putInArray("Brand new shoes!");

console.log(newShoes);







