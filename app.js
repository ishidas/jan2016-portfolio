var schoolObj = [];
// var jobObj = [];

function Schools (sth){
  this.schoolName = sth.schoolName;
  this.degree = sth.degree;
  this.major = sth.major;
  this.schoolLink = sth.schoolLink;
  this.status = sth.status
}

Schools.prototype.toHTML = function (){
  var $newContentBox = $('article.edutemplate').clone();
  // var name = $newContentBox.data('schoolName',this.schoolName);
  $('#eduname').append(this.schoolName);
  $newContentBox.append('<p>'+this.degree+'</p>'+ '<p>'+this.major+'</p>'+'<p>'+ this.status +'</p>'+'<hr>');

  // $newContentBox.append('hr');
  $newContentBox.removeClass('edutemplate');
  return $newContentBox;
};

school.forEach(function(obj){
  schoolObj.push(new Schools(obj));
})

schoolObj.forEach(function(a){
  $('#edu').append(a.toHTML())
});
