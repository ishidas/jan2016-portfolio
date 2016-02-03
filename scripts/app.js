(function(module){
  var schoolObj = [];

// school constructor
  function Schools (sth){
    this.schoolName = sth.schoolName;
    this.duration = sth.duration;
    this.degree = sth.degree;
    this.major = sth.major;
    this.schoolLink = sth.schoolLink;
    this.status = sth.status;
  }

  //Rendering school info using handlebars.js
  Schools.prototype.templateSchool = function (){
    var $appTemplate2 = $('#entry-template2').text();
    var compileTemplate2 = Handlebars.compile($appTemplate2);
    var contentPlusTemplate = compileTemplate2(this);
    $('#edu').append(contentPlusTemplate);
  };

  //setting portfolioinfo in localStorage, and parsing that out and push to SchoolObj array.
  Schools.setLocalStorage = function (){
    $.getJSON('data/portfolioinfo.json',function(data, message, xhr){
      localStorage.setItem('schoolRaw', JSON.stringify(data));
      localStorage.etag = xhr.getResponseHeader('eTag');
    })
    .done(function(){
      Schools.pushToArray();
    });
  };

  // Schools.setLocalStorage();
  Schools.pushToArray = function (){
    var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));
    getBackShoolObj.map(function(x){
      schoolObj.push(x);
    });
  };

  //checking for update comparing eTag
  function checkUpdate (){
    $.ajax({
      type: 'HEAD',
      url:  'data/portfolioinfo.json',
      complete: function(xhr){
        var eTag = xhr.getResponseHeader('eTag');
        if(localStorage.etag !== eTag){
          Schools.setLocalStorage();
          if(schoolObj.length < 1){
            setTimeout(Schools.createNewObj, 500);
            Schools.createNewObj();}
        } else {
          Schools.pushToArray();
          Schools.createNewObj();
        }
      }
    }); //end of ajax call
  }; //end of checkUpdate function

// create new school objects
  Schools.createNewObj = function(){
    schoolObj.forEach(function(obj){
      var newObj = new Schools(obj);
      return newObj.templateSchool();
    });
  };

// navbar toggle
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

  module.Schools = Schools;
  module.checkUpdate = checkUpdate;

})(window);
