(function(module){
  var galleryController = {};
  galleryController.gallery = function(){
    $('body section').hide();
    $('#gallerytab').show();
  };

  window.galleryController = galleryController;
})(windoe);
