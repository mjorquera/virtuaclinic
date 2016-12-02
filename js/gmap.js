var mapLocation = new google.maps.LatLng(-33.3872439, -70.6165972); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 13, //change zoom here
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]

    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


    //change address details here
    var contentString = '<div class="map-info-box">'
    + '<div class="map-head">'
    + '<h3>Launch</h3></div>'
    + '<p class="map-address"><i class="fa fa-map-marker"></i> VirtuaClinic HQ <br><i class="fa fa-phone"></i> 56 2 2332 1235<br><span class="map-email"><i class="fa fa-envelope"></i> info@virtuaclinic.cl</span></p>'
    + '<p><a href="https://www.google.cl/maps/place/Ciudad+Empresarial+S.A./@-33.3872439,-70.6165972,17z/data=!3m1!4b1!4m5!3m4!1s0x9662c8af41a957cb:0x9fd3e27f286f450!8m2!3d-33.3872439!4d-70.6144085" target="_blank">Abrir en Google Maps</a></p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'VirtuaClinic', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
