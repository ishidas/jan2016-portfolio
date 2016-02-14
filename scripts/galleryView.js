(function(module){
  var galleryView = {};

  var render = function(repo){
    var h4Tag = document.createElement('h4');
    var section = $('#gallerytab');
    $(h4Tag).text(repo.name);
    console.log(h4Tag);
    return h4Tag;
  };

  galleryView.index = function (){
    $('#gallerytab').append(
      repoData.with('name').map(render)
    );
  };

  module.galleryView = galleryView;

})(window);
