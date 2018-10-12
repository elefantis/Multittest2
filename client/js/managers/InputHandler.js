function InputHandler( game ) {
    const ARROW_LEFT = 37, ARROW_UP = 38, ARROW_RIGHT = 39, ARROW_DOWN = 40;
    const A_KEY = 65, W_KEY = 87, D_KEY = 68, S_KEY = 83;
    const LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3;
    let pressedKeys = [ ];
    let commands = [ ];
    this.game = game;
    // Inicializa atributos
    this.id = -1;

    // Activa los escuchadores de teclas
    document.addEventListener( "keydown", function( key ) {
        pressedKeys[ key.keyCode ] = true;
    } );

    document.addEventListener( "keyup", function( key ) {
        pressedKeys[ key.keyCode ] = false;
    } );

    this.handleInput = function( ) {
        commands = [ ];
        if( pressedKeys[ ARROW_LEFT ] || pressedKeys[ A_KEY ] ) {
           commands.push( new MoveUnitCommand( this.game, LEFT ) );
        }
        if( pressedKeys[ ARROW_UP ] || pressedKeys[ W_KEY ] ) {
           commands.push( new MoveUnitCommand( this.game, UP ) );
        }
        if( pressedKeys[ ARROW_RIGHT ] || pressedKeys[ D_KEY ] ) {
           commands.push( new MoveUnitCommand( this.game, RIGHT ) );
        }
        if( pressedKeys[ ARROW_DOWN ] || pressedKeys[ S_KEY ] ) {
           commands.push( new MoveUnitCommand( this.game, DOWN ) );
        }
        return commands;
    }
}