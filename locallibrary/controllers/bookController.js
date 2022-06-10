 var Book = require('../models/book');
// Показать страницу приветствия
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};
// Показать список всех книг.
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};
// Показать подробную страницу для данной книги.
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
// Показать форму создания книги по запросу GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};
// Создать книгу по запросу POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};
// Показать форму удаления книги по запросу GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};
// Удалить книгу по запросу POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};
// Показать форму обновления Book по запросу GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};
// Обновить Book по запросу POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};