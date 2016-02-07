// page.base('');
page('/', indexController.index);
page('/about', aboutController.about);
page('/gallery',galleryController.gallery);
page('/experience',experienceController.experience);
page('*', notFound);

// not found callback function ctx is an object, and ctx.path has the route name.
function notFound(ctx){
  $('body section').hide();
  alert( ctx.path + ' page not found');
}

page();
