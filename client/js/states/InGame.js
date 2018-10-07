function InGame( game ) {
    var gameObjects = [ ];
    var myId = -1;

    const colors = [
        "#2d3999", "#9a1ba0", "#f08181", "#ebbb91"
    ];

    socket.on( "tanks", function( data ) {
        console.log( data );
        gameObjects = data.map( ( data ) => {
            return new Tank(100 * data.id, 100 * data.id, colors[data.id], data.id);
        } );
        console.log( "a dibujar: ")
        console.log(gameObjects)
    } );

    socket.on( "playerData", function( data ) { 
        console.log(data);
        console.log("Soy el player: ", data.id );
        console.log("Id de conexión es: ", data.uid );
        myId = data.id;
    } )

    socket.emit( "connectPlayer", { id: myId })

    this.update = function() {

    }

    this.render = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
    }
}