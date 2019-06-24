'use strict';
var productImageSectionTag = document.getElementById('allProductImages');
var leftProductImageTag = document.getElementById('leftProductImage');
var centerProductImageTag = document.getElementById('centerProductImage');
var rightProductImageTag = document.getElementById('rightProductImage');

// var resultsContainer = document.getElementById('resultsSection');

var currentClicks = 0;
var clicksForChart = 25;

//Store the images on the page
if (JSON.parse(localStorage.getItem('currentClicks'))){
  currentClicks = JSON.parse(localStorage.getItem('currentClicks'));
} else {
  currentClicks = 0;
}

var currentPicks = [];

//constructor
var ProductImage = function(name, imgSrc= 'default.jpg', clicks, timesShown){
  //refactor to build own ids
  this.name = name;
  this.url = imgSrc;
  //ternary operator, shorthand for if/else
  this.clicks = clicks ? clicks : 0;
  //means the same as above
  this.timesShown = timesShown || 0;
  ProductImage.this;
  ProductImage.allProducts.push(this);
};

if (JSON.parse(localStorage.getItem('allProducts'))){
  ProductImage.allProducts = JSON.parse(localStorage.getItem('allProducts'));
} else {
  ProductImage.allProducts = [];
}
ProductImage.allProducts = [];
ProductImage.previousProducts = [];

var buildProducts = function(){
  new ProductImage('Bag', 'assets/bag.jpg');
  new ProductImage('Banana', 'assets/banana.jpg');
  new ProductImage('Bathroom', './assets/bathroom.jpg');
  new ProductImage('Boots', './assets/boots.jpg');
  new ProductImage('Breakfast', './assets/breakfast.jpg');
  new ProductImage('Bubblegum', './assets/bubblegum.jpg');
  new ProductImage('Chair', './assets/chair.jpg');
  new ProductImage('Cthulhu', './assets/cthulhu.jpg');
  new ProductImage('DogDuck', './assets/dog-duck.jpg');
  new ProductImage('Dragon', './assets/dragon.jpg');
  new ProductImage('Pen', './assets/pen.jpg');
  new ProductImage('Pet Sweep', './assets/pet-sweep.jpg');
  new ProductImage('Scissors', './assets/scissors.jpg');
  new ProductImage('Shark', './assets/shark.jpg');
  new ProductImage('Sweep', './assets/sweep.png');
  new ProductImage('TaunTaun', './assets/tauntaun.jpg');
  new ProductImage('Unicorn', './assets/unicorn.jpg');
  new ProductImage('USB', 'assets/usb.gif');
  new ProductImage('Water Can', 'assets/water-can.jpg');
  new ProductImage('Wine Glass', 'assets/wine-glass.jpg');

};



//get random integer inclusive goes here 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
  //The maximum is inclusive and the minimum is inclusive 
}

var pickUniqueNonRepeating = function(currentPicks){
  var index, product;

  do {
    index = getRandomIntInclusive(0, ProductImage.allProducts.length - 1);
    product = ProductImage.allProducts[index];

  } while (ProductImage.previousProducts.includes(product) || currentPicks.includes(product));

  return product;
};

var renderThreeNewProducts = function(){
  currentPicks = [];
  var leftProductImage = pickUniqueNonRepeating(currentPicks);
  currentPicks.push(leftProductImage);

  var centerProductImage = pickUniqueNonRepeating(currentPicks);
  currentPicks.push(centerProductImage);

  var rightProductImage = pickUniqueNonRepeating(currentPicks);
  currentPicks.push(rightProductImage);

  leftProductImageTag.src = leftProductImage.url;
  centerProductImageTag.src = centerProductImage.url;
  rightProductImageTag.src = rightProductImage.url;

  ProductImage.previousProducts = currentPicks;
};

//setting up event handler

var handleClickOnProduct = function(event){
  event.preventDefault();
  currentClicks++;

  if(event.target.id === 'leftProductImage'){
    ProductImage.previousProducts[0].clicks++;
  }
  if(event.target.id === 'centerProductImage'){
    ProductImage.previousProducts[1].clicks++;
  }
  if(event.target.id === 'rightProductImage'){
    ProductImage.previousProducts[2].clicks++;
  }
  for(var i = 0; i < ProductImage.previousProducts.length; i++){
    ProductImage.previousProducts[i].timesShown++;
  }

  if(currentClicks < clicksForChart){
    renderThreeNewProducts();

    //total clicks are counted and added to storage
    var storeTotalClicks = JSON.stringify(currentClicks);
    localStorage.setItem ('Current Clicks', storeTotalClicks);
  } else {
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
    makeBusChart();

    localStorage.setItem('allProducts', JSON.stringify(ProductImage.allProducts));
  }
};

//storing the objects as a string to local storage

var initPage = function(){
  buildProducts();
  renderThreeNewProducts();
  productImageSectionTag.addEventListener('click', handleClickOnProduct);

};

initPage();
