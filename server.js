var express = require('express');
var handlebars = require('express-handlebars');

// express handlebars settings
var app = express();
app.use(express.static(process.cwd() + '/public'));
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var projects = require('./projects.js')

// routes
app.get('/', function(req, res) {
  res.render('index');
})

app.get('/work', function(req, res) {
  res.render('work', projects);
})

app.get('/about', function(req, res) {
  res.render('about');
})


var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('app listening on port: '+PORT);
})
