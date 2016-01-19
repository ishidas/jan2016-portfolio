(function(module){

var schoolObj = [];
var jobObj = [];
var footerFun = [1,9,8,4,0,5,0,8];

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


//setting portfolioingo in localStorage

function update (){
  $.getJSON('data/portfolioinfo.json',function(data, message, xhr){
    localStorage.schoolRaw = JSON.stringify(data);
    localStorage.etag = xhr.getResponseHeader('eTag');
    console.log(localStorage.etag);
    renderLocalSchoolData();
    });
      renderToHtml();
}


function checkUpdate (){
  $.ajax({
          type: 'HEAD',
          url:  'portfolioinfo.json',
          complete: function(xhr){
            var eTag = xhr.getResponseHeader('eTag');
            console.log(eTag);
            if(localStorage.etag !== eTag){
              console.log(eTag);
              console.log('here')
              update();
            } else {
              console.log('Here2');
              renderLocalSchoolData();
            }
          }
  });
}
// checkUpdate();



function renderToHtml(){
schoolObj.forEach(function(a){
  var $newContentBox = $('article.edutemplate').clone();
  console.log(a.schoolName);
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

function renderLocalSchoolData () {
  var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));
  getBackShoolObj.map(function(x){
    schoolObj.push(x);
    console.log(schoolObj);
  })
  renderToHtml();
}

//pushing job objs to jobObj array
// job.forEach(function(obj){
//   jobObj.push(new WorkExp(obj));
// });

// jobObj.forEach(function(b){
//   $('#workjob').append(b.displayHtml());
// })

// $('section[id!="home"]').click().hide();
//add Tabs and 'Click' events
// var $sectionHome = $('.nav-section');
  // $sectionHome.on('click touchStart','li',function(event){
  //   event.preventDefault();
  //   $('section').hide();
  //   $('#' + $(this).data('content')).show();
  //   $('.' + $(this).data('content')).show();
  // console.log($(this).data('content'));
  //
  // })
$('.nav-section img').on('click touchStart',function(){
  if($(window).width() < 640){
  $('.nav-section').find('ul').slideToggle();
} else { $('.nav-section').show(); }
})

function stickyHeaders(){

  var $stickyHeader = $('body > header');
  var $stickableWindow = $(window).scrollTop();
  $(window).on('scroll', function(){
    $stickyHeader.attr('id','sticky');
    console.log('here here here')
  })
}
stickyHeaders();

window.schoolObj = schoolObj;
window.checkUpdate = checkUpdate;
})(window)
