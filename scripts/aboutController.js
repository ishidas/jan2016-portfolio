(function(module){
  var aboutController = {};
  checkUpdate();
  aboutController.about = function(){
    $('body section').hide();
    $('#edu,article.edutemplate').show();
  };
  window.aboutController = aboutController;
})(window);
