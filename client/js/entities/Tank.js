function Tank( x, y, color, number ) {
    const LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3;
    this.x = x;
    this.y = y;
    this.w = 32;
    this.h = 32;
    this.color = color;
    this.number = number;
    this.directions = [ ];
    this.v = 5;
    let curFrame = 0;
    let animationSpeed = 7;
    let animationTime = 0;
    let tankDirections = [ 0, 0, 0, 0 ];
    let currentAnimation = "tank1Right";
    
    this.move = function( directions ) {
        tankDirections = directions;
        this.x += ( -directions[ LEFT ] + directions[ RIGHT ] ) * this.v;
        this.y += ( -directions[ UP ] + directions[ DOWN ] ) * this.v;
    }

    this.render = function() {
        animationTime++;

        if( tankDirections[ LEFT ] == 1 && tankDirections[ UP ] == 0  && tankDirections[ DOWN ] == 0) currentAnimation = "tank1Left";
        if( tankDirections[ LEFT ] == 1 && tankDirections[ UP ] == 1  && tankDirections[ DOWN ] == 0 ) currentAnimation = "tank1LeftUp";
        if( tankDirections[ LEFT ] == 0 && tankDirections[ UP ] == 1  && tankDirections[ RIGHT ] == 0 ) currentAnimation = "tank1Up";
        if( tankDirections[ LEFT ] == 0 && tankDirections[ UP ] == 1  && tankDirections[ RIGHT ] == 1 ) currentAnimation = "tank1UpRight";
        if( tankDirections[ RIGHT ] == 1 && tankDirections[ UP ] == 0  && tankDirections[ DOWN ] == 0 ) currentAnimation = "tank1Right";
        if( tankDirections[ RIGHT ] == 1 && tankDirections[ UP ] == 0  && tankDirections[ DOWN ] == 1 ) currentAnimation = "tank1RightDown";
        if( tankDirections[ DOWN ] == 1 && tankDirections[ LEFT ] == 0  && tankDirections[ RIGHT ] == 0 ) currentAnimation = "tank1Down";
        if( tankDirections[ DOWN ] == 1 && tankDirections[ LEFT ] == 1  && tankDirections[ RIGHT ] == 0 ) currentAnimation = "tank1DownLeft";

        ctx.drawImage( animationManager.getFrame( currentAnimation, curFrame ), this.x, this.y );

        // Cambia el el frame de acuerdo al tiempo de animación
        if( animationTime > animationSpeed ) {
            animationTime = 0;
            curFrame++;
            if( curFrame > 1 ) {
                curFrame = 0;
            }
        }
    }
}