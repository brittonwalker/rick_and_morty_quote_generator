var mongoose = require('mongoose');

module.exports = mongoose.model('Quote', {
  name : {type : String, default: ''}
});
