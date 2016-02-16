(function(module){
  var galleryController = {};

  
  galleryController.gallery = function(){
    repoData.grabRepo(galleryView.index);
    $('body section').hide();
    $('#gallerytab').show();
  };

  window.galleryController = galleryController;
})(window);
