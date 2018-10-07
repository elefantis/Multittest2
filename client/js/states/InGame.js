function InGame( game ) {
    var gameObjects = [ ];
    const colors = [
        "#2d3999", "#9a1ba0", "#f08181", "#ebbb91"
    ];

    socket.on( 'tanks', function( data ) {
        console.log( data );
        gameObjects = data.map( ( data ) => {
            return new Tank(100 * data.id, 100 * data.id, colors[data.id], data.id);
        } );
    } );

    this.update = function() {

    }

    this.render = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
    }
}