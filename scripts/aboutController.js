(function(module){
  var aboutController = {};
  checkUpdate();
  aboutController.about = function(){
    $('#home').hide();
  }
  window.aboutController = aboutController;
})(window);
