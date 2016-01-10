var schoolObj = [];
var jobObj = [];
console.log(jobObj);
function Schools (sth){
  this.schoolName = sth.schoolName;
  this.degree = sth.degree;
  this.major = sth.major;
  this.schoolLink = sth.schoolLink;
  this.status = sth.status
}

//Generating School Info
Schools.prototype.toHTML = function (){
  var $newContentBox = $('article.edutemplate').clone();
  $newContentBox.find('h4').html('School Name: '+ this.schoolName).attr('data-name','eduSchoolName');
  $newContentBox.removeClass('edutemplate');
  $newContentBox.append('<p data-major="eduMajor">Major: '+this.major+'</p>');
  $newContentBox.append('<p data-degree="eduDegree">Degree: '+this.degree+'</p>');
  $newContentBox.append('<p data-status="eduStatus">Status: '+ this.status +'</p>');
  $newContentBox.append('<address>'+'<a href="">'+'School Web Site Link'+'</a>'+'</address>');
  $newContentBox.find('a').attr('href',this.schoolLink);
  $newContentBox.append('<hr>');
  return $newContentBox;
};

function WorkExp (opt){
  this.companyName = opt.companyName;
  this.companyLink = opt.companyLink;
  this.experience = opt.experience;
}

WorkExp.prototype.displayHtml = function(){
  var appTemplate = $('#entry-template').text();
  console.log(appTemplate);
  var compileTemplate = Handlebars.compile(appTemplate);
  console.log(compileTemplate);
  return compileTemplate(this);
};
//pushing school objs to school array
school.forEach(function(obj){
  schoolObj.push(new Schools(obj));
});

schoolObj.forEach(function(a){
  $('#edu').append(a.toHTML());
});

//pushing job objs to jobObj array
job.forEach(function(obj){
  jobObj.push(new WorkExp(obj));
});

jobObj.forEach(function(b){
  $('#workjob').append(b.displayHtml());
})

$('section[id!="home"]').click().hide();
//add Tabs and 'Click' events
var $sectionHome = $('.nav-section');
console.log($sectionHome);
  $sectionHome.on('click touchStart','li',function(event){
    event.preventDefault();
    $('section').hide();
    $('#' + $(this).data('content')).show();
    $('.' + $(this).data('content')).show();
  console.log($(this).data('content'));

  })
$('.nav-section img').on('click touchStart',function(){
  if($(window).width() < 640){
  $('.nav-section').find('ul').slideToggle();
} else { $('.nav-section').show(); }
})
