function LoadingState( game ) {
    var images = [];



    
    this.getImage = function( image ) {

    }

    this.update = function() {

    }

    this.render = function( ) {
        ctx.font = "30px Arial";
        ctx.fillText( "Loading...", WIDTH / 2, HEIGHT / 2 );
    }

}