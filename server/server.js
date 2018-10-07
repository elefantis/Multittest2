var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const PORT = 3000;
var id = 0;

var messages = [{
  id: 1,
  text: "Bienvenidos al súper Chat",
  author: "Sistema"
}];

var tanks = [ ];

app.use(express.static('public'));

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado al juego con id: ' + socket.id);
  tanks.push({ id: id++, input: 0 })
  socket.emit('tanks', tanks);
  console.log(tanks)

  // Saca al player que se ha desconectado
  socket.on('disconnect', (reason) => {
    tanks.splice(tanks.length - 1, 1);
    id--;
    console.log("alguien se ha desconectado");
    console.log(tanks)
  });

  socket.on('new-message', function(data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});