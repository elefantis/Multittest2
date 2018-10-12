function Bullet( ) {
    this.x = 0;
    this.y = 0;
    this.v = 12;
    this.r = 10;
    this.team = -1;
    this.direction = [ 0, 0, 0, 0 ];
    this.active = false;
    this.duration = 0;
    this.totalDuration = 30;
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
    }

    this.render = function() {
         // Impide el rendereado si está inactiva
         if( !this.active ) return;
        // Dibuja la bala
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.r, 0 ,2 * Math.PI );
        ctx.fill();
        ctx.fillStyle = "white";
    }

    this.fire = function( x, y, team, directions ) {
        console.log( "disparo! ",x, y, team, directions)
        this.duration = this.totalDuration;
        this.x = x;
        this.y = y;
        this.team = team;
        this.directions = directions;
        this.active = true;
    }

}