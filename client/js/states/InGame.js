function InGame( game ) {
    var gameObjects = [ ];
    var commands = [ ];
    var directions = [ 0, 0, 0, 0 ];
    var myId = -1;
    const inputHandler = new InputHandler( this );
    
    const colors = [
        "#2d3999", "#9a1ba0", "#f08181", "#ebbb91"
    ];
    
    // Envía el id de conexión al servidor
    socket.emit( "connectPlayer", { id: myId } )
    
    // Añade a un jugador a la partida
    socket.on( "tanks", function( data ) {
        gameObjects = data.map( ( object ) => {
            return new Tank( object.x , object.y , colors[ object.id ], object.id );
        } );
    } );

    // Identifica al jugador en la partida
    socket.on( "playerData", function( data ) { 
        console.log(data);
        console.log("Soy el player: ", data.id );
        console.log("Id de conexión es: ", data.uid );
        myId = data.id;
        // Identifica al player para el envio de datos
        inputHandler.id = data.id;
    } )

    socket.on( "moveTanks", function( data ) {
       // console.log( data.directions )
        console.log("deberia mover al: ", data.id )
        for( let i in gameObjects ) {
            if( gameObjects[ i ].number == data.id ) {
                gameObjects[ i ].move( data.directions );
                break;
            }
        }
    } );

    this.update = function() {
        // Procesa las entradas del teclado
        commands = inputHandler.handleInput()
        for( let i in commands ) {
            commands[ i ].execute( );
        }
        
        for( let i in gameObjects ) {
            if( gameObjects[ i ].number == myId ) {
                socket.emit( "movePlayer", { id: myId, directions: directions, x: gameObjects[i].x, y: gameObjects[i].y } );
            }
        }
        directions = [ 0, 0, 0, 0 ];
    }

    // Envia al servidor la accion de mover al player indicado
    this.moveUnit = function( direction ) {
        directions[ direction ] = 1;
    }
    
    

    this.render = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
    }
}