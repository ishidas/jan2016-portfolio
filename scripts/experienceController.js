(function(){
  var experienceController = {};
  experienceController.experience = function (){
    $('body section').hide();
    $('#experience').show();
  };

  window.experienceController = experienceController;
})(window);
