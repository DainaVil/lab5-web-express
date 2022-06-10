 var Genre = require('../models/genre');
  // Показать список всех Genre.
  exports.genre_list = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre list');
};
  // Показать подробную страницу для данного Genre.
  exports.genre_detail = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};
  // Показать форму создания Genre по запросу GET.
  exports.genre_create_get = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre create GET');
};
  // Создать Genre по запросу POST.
  exports.genre_create_post = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre create POST');
};
  // Показать форму удаления Genre по запросу GET.
  exports.genre_delete_get = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre delete GET');
};
  // Удалить Genre по запросу POST.
  exports.genre_delete_post = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre delete POST');
};
  // Показать форму обновления Genre по запросу GET.
  exports.genre_update_get = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre update GET');
};
// Обновить Genre по запросу POST.
  exports.genre_update_post = function(req, res) {
      res.send('NOT IMPLEMENTED: Genre update POST');
};
