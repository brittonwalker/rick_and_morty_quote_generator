var Quote = require('./models/quote');

  module.exports = function(app) {

    app.get('/api', function(req, res) {
      res.json({ message: 'hooray! welcome to hell!'});
    });

    app.get('/api/quotes', function(req, res) {
      Quote.find(function(err, quotes){
        res.json(quotes);
      });
    });

    app.get('*', function(req, res) {
      res.sendfile('index.html');
    });
    
  };
