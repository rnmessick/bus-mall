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

var randomProductImagesArray = ['assets/bag.jpg', 'assets/banana.jpg','assets/bathroom.jpg','assets/boots.jpg','assets/breakfast.jpg', 'assets/bubblegum.jpg','assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/pet-sweep.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];

//constructor
var ProductImage = function(name,imgSrc){
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imgSrc;
};




