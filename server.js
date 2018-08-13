//Install express server
var express = require('express');
var app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080,
  function(){
    console.log("Server Started ");
  });

app.use(function(req, res, next) {
  res.status(404).redirect('/');
});

/*app.get('/', function(request, response) {
  console.error(request);
  response.render('pages/index')
});*/


/*app.use(function (req, res, next) {
  res.status(404).render(__dirname + '/dist/index');
})*/

/*
app.get('*', function(req, res){
  res.status(404).render('pages/index');
});
*/
