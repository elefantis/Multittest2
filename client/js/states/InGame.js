function InGame( ) {
    const vm = this;
    var tanks = [ ];
    var bullets = [ ];
    var commands = [ ];
    var explosions = [ new Explosion( vm ), new Explosion( vm ) ]
    var directions = [ 0, 0, 0, 0 ];
    var myId = -1;
    const inputHandler = new InputHandler( this );
    let img = new Image( );
    img.src = "./assets/Background/Background.png";

    const colors = [
        "#2d3999", "#9a1ba0", "#f08181", "#ebbb91"
    ];

    // Envía el id de conexión al servidor
    socket.emit( "connectPlayer", { id: myId } )

    // Genera las balas que se usarán a lo largo de la partida
    for( let i = 0; i < 40; i++ ) {
        bullets.push( new Bullet( vm ) );
    }
    
    this.update = function() {
        // Procesa las entradas del teclado
        commands = inputHandler.handleInput()
        for( let i in commands ) {
            commands[ i ].execute( );
        }
        
        for( let i in tanks ) {
            if( tanks[ i ].number == myId ) {
                socket.emit( "movePlayer", { id: myId, directions: directions, x: tanks[i].x, y: tanks[i].y } );
            }
        }

        directions = [ 0, 0, 0, 0 ];
        // Ejecuta los procesos de actualización de los tanques
        tanks.forEach( ( gameObject ) => {
            gameObject.update( );
        } );
        bullets.forEach( ( gameObject ) => {
            gameObject.update( );
        } );
        explosions.forEach( ( gameObject ) => {
            gameObject.update( );
        } );
    }

    this.render = function( ) {
        ctx.drawImage( img, 0, 0 );
        
        bullets.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
        tanks.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
        explosions.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
        img.onload = function() {
            ctx.drawImage( img, 220, 220 );
        }
    }

    // Añade a un jugador a la partida
    socket.on( "tanks", function( data ) {
        tanks = data.map( ( object ) => {
            return new Tank( object.x , object.y , colors[ object.id ], object.id, vm );
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
        for( let i in tanks ) {
            if( tanks[ i ].number == data.id ) {
                tanks[ i ].move( data.directions );
                break;
            }
        }
    } );

    this.fire = function( ) {
        for( let i in tanks ) {
            if( tanks[ i ].number == myId ) {
                socket.emit( "fire", { id: myId, directions: tanks[i].directions, x: tanks[i].x, y: tanks[i].y } );
            }
        }
    }

    socket.on( "fire", function( data ) {
        for( let i in tanks ) {
            if( tanks[ i ].number == data.id ) {
                tanks[ i ].fire( );
            }
        }
    } );

    this.createBullet = function( x, y, team, directions ) {
        let bullet = bullets.filter( ( b ) => { if( b.active === false ) return b; } )[ 0 ];
        if( bullet ) {
            bullet.fire( x, y, team, directions );
        }
    }

    // Envia al servidor la accion de mover al player indicado
    this.moveUnit = function( direction ) {
        directions[ direction ] = 1;
    }
    
    this.collision = function( object ) {
        for( let i in tanks ) {

        }
    }

    this.getTank = function( number ) {
        return tanks[ number ];
    }

    this.generateExplosion = function( x, y ) { 
        let explosion = explosions.filter( ( e ) => { if( e.active === false ) return e; } )[ 0 ];
        if( explosion ) {
            explosion.explode( x, y );
        }
    }

    this.restartServer = function() {
        socket.emit( "restart", { id: myId } )
    }
}