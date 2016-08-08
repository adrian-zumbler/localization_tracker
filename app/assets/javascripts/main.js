var mapElement1 = document.getElementById('vehicles-map');

var mapOptions1 = {
    zoom: 16,
    center: new google.maps.LatLng(17.953959, -102.175619),
    // Style for Google Maps
    styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
};

$.get('vehicles/9.json',function(result){
  var linePoints = []
  result.vehicle_localizations.forEach(function(element){
    var marker = new Marker({
       map: map1,
       position:{lat: Number(element.lat), lng:Number(element.lng)},
       title: result.code
     });
    var obj = {lat: marker.position.lat(), lng: marker.position.lng()}
    linePoints.push(obj)
  });

  var vehiclePath = new google.maps.Polyline({
    path: linePoints,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  vehiclePath.setMap(map1);
});

var map1 = new google.maps.Map(mapElement1, mapOptions1);
