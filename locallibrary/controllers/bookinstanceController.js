var BookInstance = require('../models/bookinstance');
  // Показать список всех BookInstances.
  exports.bookinstance_list = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance list');
};
  // Показать подробную страницу для данного BookInstance.
  exports.bookinstance_detail = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};
  // Показать форму создания BookInstance по запросу GET.
  exports.bookinstance_create_get = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance create GET');
};
  // Создать BookInstance по запросу POST.
  exports.bookinstance_create_post = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance create POST');
};
  // Показать форму удаления BookInstance по запросу GET.
  exports.bookinstance_delete_get = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance delete GET');
};
  // Удалить BookInstance по запросу POST.
  exports.bookinstance_delete_post = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance delete POST');
};
  // Показать форму обновления BookInstance по запросу GET.
  exports.bookinstance_update_get = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance update GET');
};
  // Обновить Bookinstance по запросу POST.
  exports.bookinstance_update_post = function(req, res) {
      res.send('NOT IMPLEMENTED: BookInstance update POST');
};
// Показать форму обновления книги по запросу GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};
// Обновить книгу по запросу POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
