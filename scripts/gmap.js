(function(module){
  var Gmap = {};

  Gmap.initMap = function (){
    var koolina = {lat:21.331909, lng:-158.121215};
    var hilton = {lat:21.292368, lng:-157.839358};
    var kddi = {lat:34.699976, lng:135.494551};
    var comcast = {lat:47.625268, lng:-122.357668};

    var map = new google.maps.Map(document.getElementById('map'),{
      center: {lat:21.292368, lng:-157.839358},
      zoom: 3
    });
    var marker = new google.maps.Marker({
      position: koolina,
      map: map,
      title: 'Marriott KoOlina Beach Club!'
    });

    var marker = new google.maps.Marker({
      position: hilton,
      map: map,
      title: 'Hilton APAC Office'
    });

    var marker = new google.maps.Marker({
      position: kddi,
      map: map,
      title: 'KDDI Evolva Osaka Office'
    });

    var marker = new google.maps.Marker({
      position: comcast,
      map: map,
      title: 'Comcast Spotlight'
    });
  };

  // marker.setMap(map);
  module.Gmap = Gmap;
})(window);
