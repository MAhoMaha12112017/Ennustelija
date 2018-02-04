const express = require('express');
const http = require('http');
//const path = require('path');
// const port = process.env.PORT || 3000; // herokua varten..
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(__dirname + '/public')); // path.join(::)

app.get('/', (req, res) => {
  res.send('Ennustelija - webserveri pystyssä');
});

io.on('connection', (socket) => {
  console.log('USER CONNECTED');

  socket.on('lisaaOttelu', (message, callback) => {
    console.log('lisaaOttelu', message);

    const {MongoClient} = require('mongodb');
    MongoClient.connect('mongodb://localhost:27017/Otteludata', (err, db) => {
      if (err) {
        return console.log('Tietokantaan mongodb ei yhteyttä');
      }
      console.log('Yhdistetty mongodb serveriin')

      db.collection('Ottelut').insertOne(
        message
        , (err, result) => {
        if (err) {
          return console.log('Tallennus ei onnistunut');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      })

      db.close();
    });

    callback();
  });
});

server.listen(3000, () => {
  console.log('Server is up on port 3000');
});
