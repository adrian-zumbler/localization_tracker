var mapElement1 = document.getElementById('vehicles-map');


var mapOptions1 = {
    zoom: 16,
    center: new google.maps.LatLng(17.953959, -102.175619),
    // Style for Google Maps
    styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
};

var map1 = new google.maps.Map(mapElement1, mapOptions1);


var aux_vehiclePath = null
function drawPath(arrayPoints,map) {

  var vehiclePath = new google.maps.Polyline({
    path: arrayPoints,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  vehiclePath.setMap(map)
  aux_vehiclePath = vehiclePath;
}

function setMarkers(arrayMarkers,map) {
  for (var i = 0; i < arrayMarkers.length; i++) {
    arrayMarkers[i].setMap(map)
  }
}

function getDiffInHours(end_time,start_time) {
    return moment.utc(moment(end_time).diff(moment(start_time))).format("HH:mm:ss");
}

var $select = $('#select-vehicle');

function currentLocalizations() {
  $.get('vehicles.json',function(result){
    var markers = []
    result.forEach(function(element){
      var marker = new Marker({
         position:{lat: Number(element.last_lat), lng: Number(element.last_lng)},
         title: element.code
       });
       markers.push(marker);
    });
    setMarkers(markers,map1);
  });
}

$.get('vehicles.json',function(result){

  result.forEach(function(element){
    $select.append($('<option>',{value:element.id,text:element.code}));
  });
});



var aux_markers = [];
var aux_linepoints = [];

$("#btn-search").click(function(){

  var vehicle_code = $("#select-vehicle").val();
  var start_time = $("#txt-date").val() + " " + $("#start_time").val()
  var end_time = $("#txt-date").val() + " " + $("#end_time").val()

  $.post('vehicles/get_localizations/',{
      id: vehicle_code,
      start_time: start_time,
      end_time: end_time},
    function(result){
      if (aux_vehiclePath != null){aux_vehiclePath.setMap(null);}
      setMarkers(aux_markers,null);
      var markers = []
      var linePoints = [];
      result.forEach(function(element,index,array){
        current = 0;
        if((index - 1 ) < 0) {
          current = 1;
        } else {
          current = index;
        }

        diff = (index === 0)? "00:00:00": getDiffInHours(array[current].created_at,array[current - 1].created_at);

        var infoContent = '<div class="">' +
                          '<h3>' + element.vehicle.code + 'index:' + (index + 1) + '</h3>' +
                          '<h4>' + moment(element.created_at).format("DD-MM-YYYY HH:mm") +'</h4>' +
                          '<h4> DIFF:' + diff +'</h4>' +
                          '</div>';

        var infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });

        var marker = new Marker({
           position:{lat: Number(element.lat), lng: Number(element.lng)},
           title: result.code
         });

         markers.push(marker);


         google.maps.event.addListener(marker, 'click', function() {
             infoWindow.open(map1, marker);
         });

        var obj = {lat: marker.position.lat(), lng: marker.position.lng()}
        linePoints.push(obj)
      });
      setMarkers(markers,map1);
      drawPath(linePoints,map1);
      aux_markers =  markers;
      aux_linepoints = linePoints;
    });
  })

  $("#txt-date").datepicker({
    format: "yyyy-mm-dd"
  });

  $(".clockpicker").clockpicker({
    placement: 'bottom',
    align: 'left',
    autoclose: true,
    'default': 'now'
});




// query = v.vehicle_localizations.where("created_at >= ? AND created_at <= ?","2016-08-08 20:13:00","2016-08-08 21:12:00")
