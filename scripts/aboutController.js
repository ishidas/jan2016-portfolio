(function(module){
  var aboutController = {};
  checkUpdate();
  aboutController.about = function(){
    $('body section').hide();
    $('#edu').show();
  }
  window.aboutController = aboutController;
})(window);
