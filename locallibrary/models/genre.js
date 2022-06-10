var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    // name: { type: Schema.ObjectId, ref: 'Book', required: true }, //ссылка на книгу
    name: {type: String, required: true, max: 100, min: 3},
  }
);

GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});


//Export model
module.exports = mongoose.model('Genre', GenreSchema);