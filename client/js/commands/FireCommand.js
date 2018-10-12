function FireCommand( game ) {
    this.game = game;

    this.execute = function( ) {
        this.game.fire( );
    }
}