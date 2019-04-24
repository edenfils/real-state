const express  = require('express');

const serveStatic = require('serve-static');

const path = require('path');

//data

const listingsData = require('./data/listingsData.js');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/public')));

app.use('/api/listings', function(req, res) {
  res.json(listingsData);
})

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

const port =  process.env.PORT || 5000

app.listen(port);

console.log('server started on port ' + port);
