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
  $newContentBox.find('[data-major] span').text(this.major);
  $newContentBox.find('[data-degree] span').text(this.degree);
  $newContentBox.find('[data-status] span').text(this.status);
  $newContentBox.find('.edutemplate address a').attr('href',this.schoolLink);
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

//setting portfolioingo in localStorage
$.getJSON('portfolioinfo.json',function(data){
  localStorage.setItem('school',JSON.stringify(data));
  if(localStorage.school){
    console.log('localStorage.school does exist');
    var getBackShoolObj = JSON.parse(localStorage.getItem('school'));
    console.log(getBackShoolObj);
    for(var i = 0; i < getBackShoolObj.length; i++){
    schoolObj.push(getBackShoolObj[i]);
    }
  } else {
    console.log('You don\' have this data in localStorage');
  }

})
//pushing school objs to school array
// school.forEach(function(obj){
//   schoolObj.push(new Schools(obj));
// });

schoolObj.forEach(function(a){
  console.log('here');
  var $newContentBox = $('article.edutemplate').clone();
  $newContentBox.find('h4').html('School Name: '+ schoolObj.a.schoolName).attr('data-name','eduSchoolName');
  $newContentBox.removeClass('edutemplate');
  $newContentBox.find('[data-major] span').text(schoolObj.a.major);
  $newContentBox.find('[data-degree] span').text(schoolObj.a.degree);
  $newContentBox.find('[data-status] span').text(schoolObj.a.status);
  $newContentBox.find('.edutemplate address a').attr('href',schoolObj.a.schoolLink);
  return $newContentBox;
});

//pushing job objs to jobObj array
// job.forEach(function(obj){
//   jobObj.push(new WorkExp(obj));
// });

// jobObj.forEach(function(b){
//   $('#workjob').append(b.displayHtml());
// })

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
