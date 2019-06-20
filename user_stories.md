user stories for bus mall

* As a tester, I want an app that shows me choices I can click on that doesn't make me look at a new image until I've seen them all

* As a tester, I want an app that is designed to be aesthetically pleasing

* As a tester, I want an app that lets me see my chocies at the end so I may verify the correct choices have been documented

* As a tester, I want an app that is easy and intuitive to use

As a marketing team, I want an app that:

* displays the potential products three at a time, side by side

* avoids bias by not repeating any products until they've all been displayed once

* does not reveal results until 25 selections have been made

* tracks the number of clicks as well as the percentage of times the item image was clicked

As a developer, I want an app that:

* has clearly labeled objects and methods so that anyone can understand my project and work on it 

* shows three images at a time(randomly), not repeating any selections until all images have been seen once.

* tracks the voting and allows total display once the tester has selected/voted 25 times

* has a professional appearance, utilizing the provided wireframe for reference

JS Notes
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
