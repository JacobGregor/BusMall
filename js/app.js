
console.log('Hellow-World');
// ---------------------------------------------------- Global Variables --------------------------------------------------------------//
let leftH2El = document.getElementById('left-image-name')
let middleH2El = document.getElementById('middle-image-name')
let rightH2El = document.getElementById('right-image-name')
let leftImageEl = document.getElementById('left-image-img')
let middleImageEl = document.getElementById('middle-image-img')
let rightImageEl = document.getElementById('right-image-img')
let imageContainerEl = document.getElementById('global-image-container')
let viewButton = document.getElementById('button-view')

let middleIndex = null;
let rightIndex = null;
let leftIndex = null;

let rounds = 30

var ctx = document.getElementById('my-canvas').getContext('2d');

  
  
  // ---------------------------------------------------- Constructor Functions -------------------------------------------------------------//
  function Product(name,image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.timesChosen = 0;
}

// ---------------------------------------------------- Prototypes ------------------------------------------------------------------------//
Product.prototype.renderproduct = function(h2, img) {
  h2.textContent = this.name;
  img.src = this.image;
  this.timesShown++;
}


Product.allProductsArray = [];


// ---------------------------------------------------- Global Functions --------------------------------------------------------------//


function randomObject() {
 
  const previouslyShown = [leftIndex,middleIndex,rightIndex]

  for (let i = 0; i < 3; i++) {
  
    while (previouslyShown.includes(leftIndex)) {
    leftIndex = Math.floor(Math.random() * Product.allProductsArray.length);
   }
    previouslyShown.push(leftIndex);
  
    while (previouslyShown.includes(middleIndex)) {
    middleIndex = Math.floor(Math.random() * Product.allProductsArray.length);
    }
    previouslyShown.push(middleIndex);
  
    while(previouslyShown.includes(rightIndex)) {
    rightIndex = Math.floor(Math.random() * Product.allProductsArray.length);
    }
  }
    let randomLeft = Product.allProductsArray[leftIndex]
    let randomMiddle = Product.allProductsArray[middleIndex]
    let randomRight = Product.allProductsArray[rightIndex]

    renderAllProduct(randomLeft,randomMiddle,randomRight);
}  

function renderAllProduct(randomLeft,randomMiddle,randomRight) {
  randomLeft.renderproduct(leftH2El,leftImageEl);
  randomMiddle.renderproduct(middleH2El,middleImageEl);
  randomRight.renderproduct(rightH2El,rightImageEl);
}


function eventHandler(event) {
  if (rounds === 0) {
    imageContainerEl.removeEventListener('click', eventHandler);

  }
  if(event.target === leftImageEl) {
    Product.allProductsArray[leftIndex].timesChosen++;
    rounds--;
  } 

  if (event.target === middleImageEl) {
    Product.allProductsArray[middleIndex].timesChosen++;
    rounds--;
    console.log('test click mid')
  }
  if (event.target === rightImageEl) {
    Product.allProductsArray[rightIndex].timesChosen++;
    rounds--;
    console.log('test click right')
    
  }

  randomObject();
}


function buttonEvent(event) {
  if (event.target === viewButton) {
    renderChart();
    renderTable();
    storeProductLocally();
    console.log(retrieveProductsLocally);
    viewButton.removeEventListener('click', buttonEvent)
  }
}


function renderTable() {
  const ulEl = document.getElementById('click-results')
  // ulEl.innerHTML = '';
  for (let product of Product.allProductsArray) {
    const liEl = document.createElement('li')
    liEl.textContent = `${product.name} had ${product.timesChosen} clicks and was shown ${product.timesShown} times.`
    ulEl.appendChild(liEl);
  }
}

function renderChart() {
  renderChosen = [];
  renderLabels = []
console.log(Product.allProductsArray)
  for(let product of Product.allProductsArray) {
    renderChosen.push(product.timesChosen);
    renderLabels.push(product.name);
  }

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: renderLabels,
      datasets: [{
        label: [],
        data: renderChosen,
        backgroundColor: [
          '(121,204,179)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function storeProductLocally() {
  const packedProducts = JSON.stringify(Product.allProductsArray)
  localStorage.setItem('products', packedProducts)
};

function retrieveProductsLocally() {
  const packedProducts = localStorage.getItem('products');
  if(packedProducts !== null) {
    const parcedProducts = JSON.parse(packedProducts);
    for( let product of parcedProducts) {
      const retrievedProduct =   new Product(product.name,product.image)
      retrievedProduct.timesChosen = parseInt(product.timesChosen);
      retrievedProduct.timesShown = parseInt(product.timesShown); 
      Product.allProductsArray.push(retrievedProduct)
    };
  } 
  else {

    Product.allProductsArray.push(new Product('bag', 'assets/bag.jpg'));
    Product.allProductsArray.push(new Product('banana', 'assets/banana.jpg'));
    Product.allProductsArray.push(new Product('bathroom', 'assets/bathroom.jpg'));
    Product.allProductsArray.push(new Product('boots', 'assets/boots.jpg'));
    Product.allProductsArray.push(new Product('breakfast', 'assets/breakfast.jpg'));
    Product.allProductsArray.push(new Product('bubblegum', 'assets/bubblegum.jpg'));
    Product.allProductsArray.push(new Product('chair', 'assets/chair.jpg'));
    Product.allProductsArray.push(new Product('cthulhu', 'assets/cthulhu.jpg'));
    Product.allProductsArray.push(new Product('dog-duck', 'assets/dog-duck.jpg'));
    Product.allProductsArray.push(new Product('dragon', 'assets/dragon.jpg'));
    Product.allProductsArray.push(new Product('pen', 'assets/pen.jpg'));
    Product.allProductsArray.push(new Product('pet-sweep', 'assets/pet-sweep.jpg'));
    Product.allProductsArray.push(new Product('scissors', 'assets/scissors.jpg'));
    Product.allProductsArray.push(new Product('shark', 'assets/shark.jpg'));
    Product.allProductsArray.push(new Product('sweep' , 'assets/sweep.png'));
    Product.allProductsArray.push(new Product('tauntaun', 'assets/tauntaun.jpg'));
    Product.allProductsArray.push(new Product('unicorn', 'assets/unicorn.jpg'));
    Product.allProductsArray.push(new Product('water-can', 'assets/water-can.jpg'));
    Product.allProductsArray.push(new Product('wine-glass', 'assets/wine-glass.jpg'));
  }
  randomObject();
};



//  --------------------------------------------------- Listeners -------------------------------------------------------------------------//

imageContainerEl.addEventListener('click', eventHandler);
viewButton.addEventListener('click', buttonEvent);


// ---------------------------------------------------- Function Calls --------------------------------------------------------------------//


retrieveProductsLocally();
