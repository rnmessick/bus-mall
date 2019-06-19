'use strict';
/*
HTML
build wireframe ====DONE
*header with logo image and nav bar with links to other sections of site
*display totals on left main section
*have three containers for the images in center main section
*vote button
*footer



Welcome the tester and provide instruction
Randomly display three products
click on 1 of the items and click vote
  event listener fires the event handler
  check if total clicks is 25
  stop letting the user click
  display the clicks
  track which one was clicked on
  track how many times item was shown
  update the object
randomly display three new products

once every item has been shown once, items can be displayed randomly

style the page, keep all images the same size

create constructor for products === DONE

var productImage = function(){
  name
  clicks
  times shown
  url
}

array of all image objects

function to randomly pick an image

click on an image
event listener


function to display all the clicks at the end
generate a table
populate the data - adds to the inner html of an existing element
divide objects's times clicked by total shown

*/

//globals

// var randomProductImagesArray = ['assets/bag.jpg', 'assets/banana.jpg','assets/bathroom.jpg','assets/boots.jpg','assets/breakfast.jpg', 'assets/bubblegum.jpg','assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/pet-sweep.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];

var productImageSectionTag = document.getElementById('allProductImages');
var leftProductImageTag = document.getElementById('leftProductImage');
var centerProductImageTag = document.getElementById('centerProductImage');
var rightProductImageTag = document.getElementById('rightProductImage');

// var resultsContainer = document.getElementById('resultsSection');

var totalClicks = 0;
var maxClicks = 25;
//Store the images on the page

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
  var currentPicks = [];
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
  totalClicks++;

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

  if(totalClicks < maxClicks){
    renderThreeNewProducts();
  } else {
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
    makeBusChart();


  }
};


var initPage = function(){
  buildProducts();
  renderThreeNewProducts();
  productImageSectionTag.addEventListener('click', handleClickOnProduct);

};

initPage();

//chart test



//local storage, will separate out later


