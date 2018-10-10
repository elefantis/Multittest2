function MoveUnitCommand( game, direction ) {
    this.game = game;
    this.direction = direction;

    this.execute = function( ) {
        this.game.moveUnit( this.direction );
    }
}