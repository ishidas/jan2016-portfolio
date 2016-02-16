(function(module){
  var Gmap = {};

  Gmap.initMap = function (){
    var map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 21.315603, lng: -157.858093},
      zoom: 12
    });
    console.log(map);
    return map;
  };

  module.Gmap = Gmap;
})(window);
