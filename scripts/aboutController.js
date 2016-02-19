(function(module){
  var aboutController = {};
  checkUpdate();
  aboutController.about = function(callback){
    $('body section').hide();
    console.log('it is here');
    $('#edu,.edutemplate').show();
    console.log('it is here2');

  };

  window.aboutController = aboutController;
})(window);
