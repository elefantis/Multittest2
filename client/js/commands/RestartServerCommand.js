function RestartServerCommand( game ) {
    this.game = game;

    this.execute = function( ) {
        this.game.restartServer();
    }
}