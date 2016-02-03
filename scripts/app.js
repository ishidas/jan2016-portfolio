(function(module){

  var schoolObj = [];
  var jobObj = [];
  var footerFun = [1,9,8,4,0,5,0,8];

// school constructor
  function Schools (sth){
    this.schoolName = sth.schoolName;
    this.duration = sth.duration;
    this.degree = sth.degree;
    this.major = sth.major;
    this.schoolLink = sth.schoolLink;
    this.status = sth.status;
  }

  // function WorkExp (opt){
  //   this.companyName = opt.companyName;
  //   this.companyLink = opt.companyLink;
  //   this.experience = opt.experience;
  // }

  //Generating School Info
  Schools.prototype.templateSchool = function (){
    console.log('here it is!');
    var $appTemplate2 = $('#entry-template2').text();
    var compileTemplate2 = Handlebars.compile($appTemplate2);
    var contentPlusTemplate = compileTemplate2(this);
    console.log(contentPlusTemplate);
    $('#edu').append(contentPlusTemplate);
  };

  // WorkExp.prototype.displayHtml = function(){
  //   var appTemplate = $('#entry-template').text();
  //   var compileTemplate = Handlebars.compile(appTemplate);
  //   return compileTemplate(this);
  // };

  //setting portfolioinfo in localStorage
  Schools.setGetObjArray = function(){
    $.getJSON('data/portfolioinfo.json',function(data, message, xhr){
      localStorage.setItem('schoolRaw', JSON.stringify(data));
      localStorage.etag = xhr.getResponseHeader('eTag');
    })
      .done(function(){
        var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));
        getBackShoolObj.map(function(x){
          schoolObj.push(x);
        });
      });
  };

  Schools.setGetObjArray();

  // Schools.renderLocalSchoolData = function () {
  //   var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));
  //   console.log(getBackShoolObj);
  //   getBackShoolObj.map(function(x){
  //     console.log(x);
  //     schoolObj.push(x);
  //     console.log(schoolObj);
  //   });
  //
  // };
  // Schools.renderLocalSchoolData();

  $.ajax({
    type: 'HEAD',
    url:  'data/portfolioinfo.json',
    complete: function(xhr){
      var eTag = xhr.getResponseHeader('eTag');
      console.log(eTag);
      if(localStorage.etag !== eTag){
        Schools.createNewObj();
      } else {
          // renderLocalSchoolData();
        if(schoolObj.length > 1){
          Schools.createNewObj();

        };
      }
    }
  });


// create new school objects
  Schools.createNewObj = function(){
    schoolObj.forEach(function(obj){
      var newObj = new Schools(obj);
      console.log(newObj);
      return newObj.templateSchool();
    });
  };





// nav bar toggle
  $('.nav-section img').on('click touchStart',function(){
    if($(window).width() < 640){
      $('.nav-section').find('ul').slideToggle();
    } else { $('.nav-section').show(); }
  });
// sticky header
  function stickyHeaders(){
    var $stickyHeader = $('body > header');
    var $stickableWindow = $(window).scrollTop();
    $(window).on('scroll', function(){
      $stickyHeader.attr('id','sticky');
    });
  }
  stickyHeaders();

  window.schoolObj = schoolObj;

})(window);
