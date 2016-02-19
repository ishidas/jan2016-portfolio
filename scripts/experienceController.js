(function(module){
  var experienceController = {};

  experienceController.experience = function (){
    $('body section').hide();
    $('#experience').show();
  };

  module.experienceController = experienceController;
})(window);
