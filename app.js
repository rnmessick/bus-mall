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

var allProducts = [];
var totalClicks = 0;

//Store the images on the page

var leftProductOnPage = null;
var centerProductOnPage = null;
var rightProductOnPage = null;

//constructor
var ProductImage = function(name,imgSrc){
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imgSrc;

};


var renderNewProducts = function(leftIndex, centerIndex, rightIndex){
  leftProductImageTag.src = allProducts[leftIndex].url;
  centerProductImageTag.src = allProducts[centerIndex].url;
  rightProductImageTag.src = allProducts[rightIndex].url;
};

var pickRandomProduct = function(){
  var leftIndex = Math.round(Math.random() * allProducts.length - 1);

  do {
    var centerIndex = Math.round(Math.random() * allProducts.length - 1);
    var rightIndex = Math.round(Math.random() * allProducts.length - 1);
  } while (leftIndex === centerIndex && rightIndex);
  console.log('working so far');

  leftProductOnPage = allProducts[leftIndex];
  centerProductOnPage = allProducts[centerIndex];
  rightProductOnPage = allProducts[rightIndex];

  renderNewProducts(leftIndex, centerIndex, rightIndex);
  console.log(allProducts);
};

//setting up event handler

var handleClickOnProduct = function(event){
  console.log('let\'s pick some white elephant gifts');

  if(totalClicks < 25){
    var productChoiceClick = event.target;
    var id = productChoiceClick.id;

    if(id === 'leftProductImage' || id === 'centerProductImage' || id === 'rightProductImage'){
      //tracking the products and incrementing clicks
      if(id === 'leftProductImage'){
        leftProductOnPage.clicks++;
      }

      if(id === 'centerProductImage'){
        centerProductOnPage.clicks++;
      }
      if(id === 'rightProductImage'){
        rightProductOnPage.click++;

      }

      leftProductOnPage.timesShown++;
      centerProductOnPage.timesShown++;
      rightProductOnPage.timeshown++;

      pickRandomProduct();
    }
    console.log(event.target.id);
  }
  totalClicks++;

  //when user has selected 25 times, end the poll
  if(totalClicks === 25){
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
  }
};

productImageSectionTag.addEventListener('click', handleClickOnProduct);

allProducts.push(new ProductImage('Bag', 'assets/bag.jpg'));
allProducts.push(new ProductImage('Banana', 'assets/banana.jpg'));
allProducts.push(new ProductImage('Bathroom', './assets/bathroom.jpg'));
allProducts.push(new ProductImage('Boots', './assets/boots.jpg'));
allProducts.push(new ProductImage('Breakfast', './assets/breakfast.jpg'));
allProducts.push(new ProductImage('Bubblegum', './assets/bubblegum.jpg'));
allProducts.push(new ProductImage('Chair', './assets/chair.jpg'));
allProducts.push(new ProductImage('Cthulhu', './assets/cthulhu.jpg'));
allProducts.push(new ProductImage('DogDuck', './assets/dog-duck.jpg'));
allProducts.push(new ProductImage('Dragon', './assets/dragon.jpg'));
allProducts.push(new ProductImage('Pen', './assets/pen.jpg'));
allProducts.push(new ProductImage('Pet Sweep', './assets/pet-sweep.jpg'));
allProducts.push(new ProductImage('Scissors', './assets/scissors.jpg'));
allProducts.push(new ProductImage('Shark', './assets/shark.jpg'));
allProducts.push(new ProductImage('Sweep', './assets/sweep.png'));
allProducts.push(new ProductImage('TaunTaun', './assets/tauntaun.jpg'));
allProducts.push(new ProductImage('Unicorn', './assets/unicorn.jpg'));
allProducts.push(new ProductImage('USB', 'assets/usb.gif'));
allProducts.push(new ProductImage('Water Can', 'assets/water-can.jpg'));
allProducts.push(new ProductImage('Wine Glass', 'assets/wine-glass.jpg'));


pickRandomProduct();





