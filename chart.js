function makeBusChart(){
  
  var busChartCanvas = document.getElementById('busResults');

  var percents = [];
  var names = [];

  for(var i = 0; i < ProductImage.allProducts.length; i++){
    var p = Math.floor((ProductImage.allProducts[i].clicks / ProductImage.allProducts[i].timesShown) * 100);
    names.push(ProductImage.allProducts[i].name);
    percents.push(p);
  }
  // ['Bag', 'Banana','Bathroom','Boots','Breakfast', 'Bubblegum','Chair','Cthulhu','Dog-Duck','Dragon','Pen','Pet Sweeper','Scissors','Shark','Baby Sweep','Taun Taun','Unicorn','USB','Watering Can','Wine Glass'],
  var chartData = {
    labels: names,
    datasets: [{
      label: 'Your Product Votes',
      data: percents,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(34, 9, 1, .2)',
        'rgba(98, 23, 8, .2)',
        'rgba(193, 98, 0, .2)',
        'rgba(136, 22, 0, .2)',
        'rgba(148, 27, 12, .2)',
        'rgba(228, 87, 46, .2)',
        'rgba(41, 51, 92, .2)',
        'rgba(243, 167, 18, .2)',
        'rgba(168, 198, 134, .2)',
        'rgba(102, 155, 188, .2)',
        'rgba(255, 0, 85, .2)',
        'rgba(181, 62, 214, .2)',
        'rgba(92, 242, 16, .2)',
        'rgba(62, 49, 198, .2)',
        'rgba(0, 157, 255, .2)'

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(34, 9, 1, 1)',
        'rgba(98, 23, 8, 1)',
        'rgba(193, 98, 0, 1)',
        'rgba(136, 22, 0, 1)',
        'rgba(148, 27, 12, 1)',
        'rgba(228, 87, 46, 1)',
        'rgba(41, 51, 92, 1)',
        'rgba(243, 167, 18, 1)',
        'rgba(168, 198, 134, 1)',
        'rgba(102, 155, 188, 1)',
        'rgba(255, 0, 85, 1)',
        'rgba(181, 62, 214, 1)',
        'rgba(92, 242, 16, 1)',
        'rgba(62, 49, 198, 1)',
        'rgba(0, 157, 255, 1)'

      ],
      borderWidth: 1
    }]
  };

  var busChartObject = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }

        }]
      }
    }
  };

  var busChart = new Chart(busChartCanvas, busChartObject);
}