(function(module){
  var galleryView = {};

  var render = function(repo){
    var h4Tag = document.createElement('a');
    var liEl = document.createElement('li');
    var section = $('#gallerytab');
    $(h4Tag).attr('href', repo.clone_url).text(repo.name + ' Created: ' + repo.created_at);
    $(liEl).append(h4Tag);
    console.log(liEl);
    return liEl;
  };

  galleryView.index = function (){
    $('#gallerytab ul').append(
      repoData.with('clone_url','name','created_at').map(render)
    );
  };

  module.galleryView = galleryView;

})(window);
