function Tank( x, y, color, number, game ) {
    this.x = x;
    this.y = y;
    this.w = 93;
    this.h = 77;
    this.color = color;
    this.number = number;
    this.directions = [ 0, 0, 0, 0 ];
    this.orientation = [ 1, 0, 0, 0]
    this.v = 5;
    this.solid = true;
    // Configura valores de cadencia de disparo
    this.coolDownTimeFire1 = 30;
    this.cooldownFire1 = 0;
    this.game = game;
    this.active = true;

    let curFrame = 0;
    let animationSpeed = 7;
    let animationTime = 0;
    let currentAnimation = "tank1Right";
    let nextX;
    let nextY;
    
    this.move = function( directions ) {
        if( !this.active ) return;

        this.directions = directions;
        if(  [ 0, 0, 0, 0 ].equals( this.directions ) === false ) {
            this.orientation = [ this.directions[ 0 ], this.directions[ 1 ], this.directions[ 2 ], this.directions[ 3 ] ];
        }
        nextX = this.x + ( -directions[ LEFT ] + directions[ RIGHT ] ) * this.v;
        nextY = this.y + ( -directions[ UP ] + directions[ DOWN ] ) * this.v;
        if( nextX >= 0 && ( nextX + this.w ) <= WIDTH ) {
            this.x = nextX;
        }
        if( nextY >= 0 && ( nextY + this.h ) <= HEIGHT ) {
            this.y = nextY;
        }
    }

    this.fire = function() {
        if( !this.active ) return;
        if( this.cooldownFire1 <= 0 ) {
            this.cooldownFire1 = this.coolDownTimeFire1;
            this.game.createBullet( this.x + this.w / 2, this.y + this.h / 2 - 4, this.number, this.orientation );
        }
    }

    this.receiveHit = function( ) {
        this.active = false;
        this.game.generateExplosion( this.x, this.y );
        this.x = -999;
    }

    this.update = function() {
        if( !this.active ) return;
        // Reduce el tiempo de enfriamiento del arma
        if( this.cooldownFire1 > 0 ) {
            this.cooldownFire1--;
        }
    }

    this.render = function() {
        if( !this.active ) return;
        let number = 1;
        animationTime++;
        if( this.number === 0 ) number = 1;
        else if (this.number === 1) number = 2;

        if( this.directions[ LEFT ] == 1 && this.directions[ UP ] == 0  && this.directions[ DOWN ] == 0) currentAnimation = "tank" + number + "Left";
        if( this.directions[ LEFT ] == 1 && this.directions[ UP ] == 1  && this.directions[ DOWN ] == 0 ) currentAnimation = "tank" + number + "LeftUp";
        if( this.directions[ LEFT ] == 0 && this.directions[ UP ] == 1  && this.directions[ RIGHT ] == 0 ) currentAnimation = "tank" + number + "Up";
        if( this.directions[ LEFT ] == 0 && this.directions[ UP ] == 1  && this.directions[ RIGHT ] == 1 ) currentAnimation = "tank" + number + "UpRight";
        if( this.directions[ RIGHT ] == 1 && this.directions[ UP ] == 0  && this.directions[ DOWN ] == 0 ) currentAnimation = "tank" + number + "Right";
        if( this.directions[ RIGHT ] == 1 && this.directions[ UP ] == 0  && this.directions[ DOWN ] == 1 ) currentAnimation = "tank" + number + "RightDown";
        if( this.directions[ DOWN ] == 1 && this.directions[ LEFT ] == 0  && this.directions[ RIGHT ] == 0 ) currentAnimation = "tank" + number + "Down";
        if( this.directions[ DOWN ] == 1 && this.directions[ LEFT ] == 1  && this.directions[ RIGHT ] == 0 ) currentAnimation = "tank" + number + "DownLeft";

        ctx.drawImage( animationManager.getFrame( currentAnimation, curFrame ), this.x, this.y );

        // Cambia el el frame de acuerdo al tiempo de animación
        if( animationTime > animationSpeed ) {
            animationTime = 0;
            curFrame++;
            // Activa el loop de la animación
            if( curFrame > 1 ) {
                curFrame = 0;
            }
        }
        // ctx.fillRect( this.x, this.y, this.w, this.h );
    }
}