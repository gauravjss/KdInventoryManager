//Install express server
const express = require('express');
const {mongoose} = require('./server/db/mongoose');
var app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const InventoryRoutes = require('./server/routes/InventoryManagerRoutes');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,DELETE,OPTIONS");
  next();
});
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));


app.post('/kdInventoryManager', InventoryRoutes.postRoute);
app.get('/kdInventoryManager', InventoryRoutes.getRoute);
app.get('/kdInventoryManager/:id', InventoryRoutes.getByIdRoute);
app.delete('/kdInventoryManager/:id', InventoryRoutes.deleteRoute);
app.patch('/kdInventoryManager/:id/:update/:quantity', InventoryRoutes.patchRoute);
app.post('/kdInventoryManager/bulkPost',InventoryRoutes.bulkPostRoute);
app.post('/kdInventoryLog', InventoryRoutes.postInventoryLogRoute);
app.get('/kdInventoryLog', InventoryRoutes.getInventoryLogRoute);

console.log(process.env);
// Start the app by listening on the default Heroku port
app.listen(port,
  function(){
    console.log(`Started up at Port ${port}`);
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
