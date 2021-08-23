console.log('Hellow-World');
// ---------------------------------------------------- Global Variables --------------------------------------------------------------//


// ---------------------------------------------------- Global Functions --------------------------------------------------------------//

// ---------------------------------------------------- Constructor Functions -------------------------------------------------------------//
function product(name,image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0
  this.timesChosen = 0
}

// ---------------------------------------------------- Prototypes ------------------------------------------------------------------------//
product.allProducts = [];


// ---------------------------------------------------- Function Calls --------------------------------------------------------------------//
product.allProducts.push(new product('bag', 'assets/bag.jpg'));
product.allProducts.push(new product('banana', 'banana.jpg'));
product.allProducts.push(new product('bathroom', 'bathroom.jpg'));
product.allProducts.push(new product('boots', 'boots.jpg'));
product.allProducts.push(new product('breakfast', 'breakfast.jpg'));
product.allProducts.push(new product('bubblegum', 'bubblegum.jpg'));
product.allProducts.push(new product('chair', 'chair.jpg'));
product.allProducts.push(new product('cthulhu', 'cthulhu.jpg'));
product.allProducts.push(new product('dog-duck', 'dog-duck.jpg'));
product.allProducts.push(new product('dragon', 'dragon.jpg'));
product.allProducts.push(new product('pen', 'pen.jpg'));
product.allProducts.push(new product('pet-sweep', 'pet-sweep.jpg'));
product.allProducts.push(new product('scissors', 'scissors.jpg'));
product.allProducts.push(new product('shark', 'shark.jpg'));
product.allProducts.push(new product('sweep' , 'sweep.png'));
product.allProducts.push(new product('tauntaun', 'tauntaun.jpg'));
product.allProducts.push(new product('unicorn', 'unicorn.jpg'));
product.allProducts.push(new product('water-can', 'water-can.jpg'));
product.allProducts.push(new product('wine-glass', 'wine-glass.jpg'));
console.log(product.allProducts)


