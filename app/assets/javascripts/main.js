var mapElement1 = document.getElementById('vehicles-map');

var myLatLng = {lat: 17.953959, lng: -102.175619};
var mapOptions1 = {
    zoom: 16,
    center: new google.maps.LatLng(17.953959, -102.175619),
    // Style for Google Maps
    styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
};

var map1 = new google.maps.Map(mapElement1, mapOptions1);

var marker = new Marker({
         map: map1,
         position:{lat: 17.953959, lng: -102.175619},
         title: 'Empresa de prueba'

       });
var marker1 = new google.maps.Marker({
        position: {lat: 17.954000, lng: -102.177000},
        map: map1,
        title: 'Empresa de prueba1'
      });

var marker2 = new google.maps.Marker({
        position: {lat: 17.958000, lng: -102.178000},
        map: map1,
        title: 'Empresa de prueba2'
      });

var marker3 = new google.maps.Marker({
        position: {lat: 17.951000, lng: -102.179000},
        map: map1,
        title: 'Empresa de prueba3'
      });

var marker4 = new google.maps.Marker({
        position: {lat: 17.960000, lng: -102.174000},
        map: map1,
        title: 'Empresa de prueba4'
      });

var flightPlanCoordinates = [
          {lat: 17.951000, lng: -102.179000},
          {lat: 17.954000, lng: -102.177000},
          {lat: 17.953959, lng: -102.175619},
          {lat: 17.958000, lng: -102.178000},
          {lat: 17.960000, lng: -102.174000},
        ];
var flightPath = new google.maps.Polyline({
  path: flightPlanCoordinates,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2
});

flightPath.setMap(map1);
