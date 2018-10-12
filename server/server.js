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
  new Tank( -1, 0 ),
  new Tank( -1, 1 ),
];

app.use( express.static( "public" ) );

// Conecta un cliente al servidor
io.on( "connection", function( socket ) {
  let newId = -1;
  // Se conecta un player que quiere jugar
  socket.on( "connectPlayer", function( data ) {
    // Asigna id si no la tiene
    if( data.id == -1 ) {
      for( let i in players ) {
        // Asigna un player al jugador
        if( players[ i ].asigned === false ) {
          newId = players[ i ].id;
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
    let datax = [];
    // Busca solo a los players conectados
    for( let i in players ) {
      if( players[i].inGame == true) {
        datax.push( players[i] );
      }
    }
    console.log( "Alguien se ha conectado al juego con id: " + socket.id );
    io.emit( "tanks", datax );
    console.log( datax );
  } )

  socket.on( "restart", function( data ) {
    console.log( "Jugador: ", data, "ha solicitado resetear el server");
    let datax = [];
    // Busca solo a los players conectados
    for( let i in players ) {
      if( players[i].inGame == true) {
        datax.push( players[i] );
        if( players[i].id == 0 ) {
          players[i].x = 100;
          players[i].y = 100;
        }else {
          players[i].x = 824;
          players[i].y = 500;
        }
      }
    }
    io.emit( "tanks", datax );
  } );

  socket.on( "movePlayer", ( data ) => {
    players[ data.id ].x = data.x;
    players[ data.id ].y = data.y;
    io.emit("moveTanks", data );
  } );

  socket.on( "fire", ( data ) => {
    io.emit("fire", data );
  } );

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

    

    let datax = [];
    // Busca solo a los players conectados
    for( let i in players ) {
      if( players[i].inGame == true) {
        datax.push( players[i] );
      }
    }

    console.log("alguien se ha desconectado, Jugadores online:");
    console.log( datax )

    io.emit( "tanks", datax );
    console.log( datax );
  });
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});