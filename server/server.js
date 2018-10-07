const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = 3000;
const Tank = require( "./gameServer/Tank" );

// Set variables
var id = 0;
var tanks = [ ];

app.use( express.static( "public" ) );

// Conecta un cliente al servidor
io.on( "connection", function( socket ) {
  console.log( "Alguien se ha conectado al juego con id: " + socket.id) ;
  // Envia el id del player al usuario
  socket.emit( "playerData", new Tank( socket.id, id ) );
  tanks.push( new Tank( socket.id, id++ ))
  socket.emit("tanks", tanks );
  console.log( tanks )

  // Saca al player que se ha desconectado
  socket.on("disconnect", ( reason ) => {
    console.log("se desconectó el ", socket.id );

    // Busca el Id de quien se desconectó
    let indexTank = tanks.reduce( ( current, tank, index ) => {
      console.log( tank.uid, socket.id ) 
      if( tank.uid == socket.id ) {
        return index;
      }
      return current;
    }, -1 );
    if( indexTank != -1 ) {
      // Retira el tanque de la lista con su Id y todo
      tanks.splice( indexTank, 1) ;
    }

    console.log("alguien se ha desconectado, Jugadores online:");
    console.log(tanks)
  });
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});