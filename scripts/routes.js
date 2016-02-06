// page.base('');
page('/', indexController.index);
page('/about', aboutController.about);
page('/gallery',galleryController.gallery);
// page('*', notFound);

page();
