




$('.button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  //console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

$('.carousel').carousel({
  interval: 2000
})

var map;

    map = new google.maps.Map(document.getElementById('map'), 
    {
   center: {lat:51.4938438, lng: 31.2999212},
    zoom: 15,
    scrollwheel: false, 
    mapTypeControl: false 
  });
  
var directionsService = new google.maps.DirectionsService();
  directionsDisplay.setMap(map);


$(document).ready(function(){
  initMap();
});