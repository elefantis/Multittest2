function Bullet( game ) {
    this.x = 0;
    this.y = 0;
    this.v = 36;
    this.r = 10;
    this.team = -1;
    this.enemy = -1;
    this.direction = [ 0, 0, 0, 0 ];
    this.active = false;
    this.duration = 0;
    this.totalDuration = 8;
    this.game = game;
   
    var nextX;
    var nextY;

    this.update = function( ) {
        // Impide el movimiento si está inactiva
        if( !this.active ) return;

        nextX = this.x + ( -this.directions[ LEFT ] + this.directions[ RIGHT ] ) * this.v;
        nextY = this.y + ( -this.directions[ UP ] + this.directions[ DOWN ] ) * this.v;
        if( nextX >= 0 && ( nextX + this.r ) <= WIDTH ) {
            this.x = nextX;
        } else {
            this.active = false;
        }
        if( nextY >= 0 && ( nextY + this.r ) <= HEIGHT ) {
            this.y = nextY;
        } else {
            this.active = false;
        }
        this.duration--;
        if( this.duration <= 0 ) {
            this.active = false;
        }
        // Marca la hitbox de la bala
        var hitBox = { x: this.x - this.r, y: this.y - this.r, w: this.r * 2, h: this.r * 2 };
        // Indica cual es el tanque al que le hará daño
        if( this.team ===  0 ) this.enemy = this.game.getTank( 1 );
        else this.enemy = this.game.getTank( 0 );

        // Verifica si hay colision con el tanque enemigo
        if( collision( hitBox.x, hitBox.y, hitBox.w, hitBox.h, 
            this.enemy.x, this.enemy.y, this.enemy.w, this.enemy.h) ) {
                console.log( "ME PITIE UNO!!!");
                this.enemy.receiveHit();
                this.active = false;
        }
        
    }

    this.render = function() {
         // Impide el rendereado si está inactiva
         if( !this.active ) return;
        // Dibuja la bala
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.r, 0 ,2 * Math.PI );
        ctx.fill();
        ctx.fillStyle = "white";
    }

    this.fire = function( x, y, team, directions ) {
        this.duration = this.totalDuration;
        this.x = x;
        this.y = y;
        this.team = team;
        this.directions = directions;
        this.active = true;
    }
}