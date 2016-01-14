var schoolObj = [];
var jobObj = [];


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
  $newContentBox.find('h4').html('School Name: '+ schoolObj.a.schoolName).attr('data-name','eduSchoolName');
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
  var compileTemplate = Handlebars.compile(appTemplate);
  return compileTemplate(this);
};

// var school = new Schools({
//   schoolName: $('[data-name] span').val,
//   major: $('[data-major] span').val,
//   degree: $('[data-degree] span').val,
//   status: $('[data-status] span').val,
//   schoolLink: $('.edutemplate address a').attr('href', this.schoolLink)
// })
//setting portfolioingo in localStorage
Schools.update = function(){
$.getJSON('portfolioinfo.json',function(data, message, xhr){
  //setting data into localStorage
  localStorage.setItem('schoolRaw',JSON.stringify(data));
  var saveTag = localStorage.eTag;
  saveTag = xhr.getResponseHeader('eTag');
  console.log(localStorage.eTag);
  if(saveTag !== xhr.getResponseHeader('eTag')){
    var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));

  } else {
        var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));
        getBackShoolObj.forEach(function(a){
          var arrayLength = schoolObj.length;
          schoolObj.push(new Schools(a));
        console.log(new Schools(a));
        if(schoolObj.length >= arrayLength){
          renderToHtml();
        }
       })
  }

  })
}
Schools.update();

//pushing school objs to school array
// school.forEach(function(obj){
//   schoolObj.push(new Schools(obj));
// });


function renderToHtml(){
schoolObj.forEach(function(a){
  console.log(a.schoolName);
  var $newContentBox = $('article.edutemplate').clone();
  $newContentBox.find('#eduname').text(a.schoolName);
  $newContentBox.find('[data-major] span').text(a.major);
  $newContentBox.find('[data-degree] span').text(a.degree);
  $newContentBox.find('[data-status] span').text(a.status);
  $newContentBox.find('.edutemplate address a').attr('href',a.schoolLink);
  $newContentBox.removeClass('edutemplate');
  console.log($newContentBox);
  $('#edu').append($newContentBox);

});
}
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
