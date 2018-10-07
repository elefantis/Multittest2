const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = 3000;
const Tank = require( "./gameServer/Tank" );

// Set variables
const MAX_PLAYERS = 4;
var id = 0;
var players = [  
  new Tank( -1, 0),
  new Tank( -1, 1),
  new Tank( -1, 2),
  new Tank( -1, 3)
];

app.use( express.static( "public" ) );

// Conecta un cliente al servidor
io.on( "connection", function( socket ) {
  // Se conecta un player que quiere jugar
  socket.on( "connectPlayer", function( data ) {
    // Asigna id si no la tiene
    if( data.id == -1 ) {
      for( let i in players ) {
        // Asigna un player al jugador
        if( players[ i ].asigned === false ) {
          socket.emit( "playerData", new Tank( socket.id, players[ i ].id ) );
          players[ i ].uid = socket.id;
          players[ i ].asigned = true;
          players[ i ].inGame = true;
          break;
        }
      }
    } else {
      // Reactiva al player que se había desconectado
      for( let i in players ) {
        if( players[ i ].id === data.id ) {
          players[ i ].inGame = true;
          players[ i ].uid = socket.id;
          break;
        }
      }
    }

    // Envia al cliente solo los conectados
    let connectedPlayers = players.filter( ( player ) => {
      return player.inGame;
    } );
    console.log( "Alguien se ha conectado al juego con id: " + socket.id) ;
    io.emit("tanks", connectedPlayers );
    console.log( connectedPlayers )
  } )
  

  // Saca al player que se ha desconectado
  socket.on("disconnect", ( reason ) => {
    console.log("se desconectó el ", socket.id );

    // Busca el Id de quien se desconectó
    let idTank = players.reduce( ( current, tank, index ) => {
      console.log( tank.uid, socket.id ) 
      if( tank.uid == socket.id ) {
        return tank.id;
      }
      return current;
    }, -1 );
    if( idTank != -1 ) {
      // Retira el tanque de la lista con su Id y todo
      players[idTank].inGame = false;
    }

    // Envia al cliente solo los conectados
    let connectedPlayers = players.filter( ( player ) => {
      return player.inGame;
    } );
    console.log("alguien se ha desconectado, Jugadores online:");
    console.log(connectedPlayers)
    io.emit("tanks", connectedPlayers );
  });
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});