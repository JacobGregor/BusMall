
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

let rounds = 25


// ---------------------------------------------------- Constructor Functions -------------------------------------------------------------//
function product(name,image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0
  this.timesChosen = 0
}

// ---------------------------------------------------- Prototypes ------------------------------------------------------------------------//
product.prototype.renderproduct = function(h2, img) {
  h2.textContent = this.name;
  img.src = this.image;
  this.timesShown++;
}

product.allProductsArray = [];


// ---------------------------------------------------- Global Functions --------------------------------------------------------------//


function randomObject() {
  let leftIndex;
  let middleIndex;
  let rightIndex;

for (let i = 0; i < 3; i++) {
  
    while (leftIndex === undefined || leftIndex === middleIndex || leftIndex === rightIndex) {
    leftIndex = Math.floor(Math.random() * product.allProductsArray.length);
  }
    randomLeft = product.allProductsArray[leftIndex]
    
    while (middleIndex === undefined || middleIndex === leftIndex || middleIndex === rightIndex) {
    middleIndex = Math.floor(Math.random() * product.allProductsArray.length);
  }
    randomMiddle = product.allProductsArray[middleIndex]

    while(rightIndex === undefined || rightIndex === middleIndex || rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * product.allProductsArray.length);
  }
    randomRight = product.allProductsArray[rightIndex]

    renderAllProduct(randomLeft,randomMiddle,randomRight);
 }
}  

function renderAllProduct(randomLeft,randomMiddle,randomRight) {
  randomLeft.renderproduct(leftH2El,leftImageEl);
  randomMiddle.renderproduct(middleH2El,middleImageEl);
  randomRight.renderproduct(rightH2El,rightImageEl);
}


function eventHandler(event) {
  if(event.target === leftImageEl || event.target === middleImageEl || event.target === rightImageEl) {
    rounds--;
  }
  if(event.target === leftImageEl) {
    this.timesChosen++
  } 
  else if (event.target === middleImageEl) {
    this.timesChosen++
  }
  else if (event.target === rightImageEl) {
    this.timesChosen++
  }
  
  if (rounds === 0) {
    imageContainerEl.removeEventListener('click', eventHandler);
    }

  randomObject();
}

function buttonEvent(event) {
  if (event.target === viewButton) {
    renderTable();
    viewButton.removeEventListener('click', buttonEvent)
  }
}



function createElement (tag, parent,text) {
  let element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

function renderTable() {
  const ulEl = document.getElementById('click-results')
  ulEl.innerHTML = '';
  for (product of product.allProductsArray) {
    const liEl = document.createElement('li')
    liEl.textContent = `${product.name} had ${product.timesChosen} clicks and was shown ${product.timesShown} times.`
    ulEl.appendChild(liEl);
  }
}

//  --------------------------------------------------- Listeners -------------------------------------------------------------------------//

imageContainerEl.addEventListener('click', eventHandler);
viewButton.addEventListener('click', buttonEvent);


// ---------------------------------------------------- Function Calls --------------------------------------------------------------------//

product.allProductsArray.push(new product('bag', 'assets/bag.jpg'));
product.allProductsArray.push(new product('banana', 'assets/banana.jpg'));
product.allProductsArray.push(new product('bathroom', 'assets/bathroom.jpg'));
product.allProductsArray.push(new product('boots', 'assets/boots.jpg'));
product.allProductsArray.push(new product('breakfast', 'assets/breakfast.jpg'));
product.allProductsArray.push(new product('bubblegum', 'assets/bubblegum.jpg'));
product.allProductsArray.push(new product('chair', 'assets/chair.jpg'));
product.allProductsArray.push(new product('cthulhu', 'assets/cthulhu.jpg'));
product.allProductsArray.push(new product('dog-duck', 'assets/dog-duck.jpg'));
product.allProductsArray.push(new product('dragon', 'assets/dragon.jpg'));
product.allProductsArray.push(new product('pen', 'assets/pen.jpg'));
product.allProductsArray.push(new product('pet-sweep', 'assets/pet-sweep.jpg'));
product.allProductsArray.push(new product('scissors', 'assets/scissors.jpg'));
product.allProductsArray.push(new product('shark', 'assets/shark.jpg'));
product.allProductsArray.push(new product('sweep' , 'assets/sweep.png'));
product.allProductsArray.push(new product('tauntaun', 'assets/tauntaun.jpg'));
product.allProductsArray.push(new product('unicorn', 'assets/unicorn.jpg'));
product.allProductsArray.push(new product('water-can', 'assets/water-can.jpg'));
product.allProductsArray.push(new product('wine-glass', 'assets/wine-glass.jpg'));

