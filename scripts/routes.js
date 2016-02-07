// page.base('');
page('/', indexController.index);
page('/about', aboutController.about);
page('/gallery',galleryController.gallery);
page('/experience',experienceController.experience);
// page('*', notFound);

page();
