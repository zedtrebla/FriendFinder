
var path = require('path');

module.exports = function(app){

  // HTML GET Request
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/../public/home.html'));
})
// sends user to survey HTML
app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, '/../public/survey.html'));
})

  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}
