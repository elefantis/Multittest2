function Tank( x, y, color, number ) {
    const LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3;
    this.x = x;
    this.y = y;
    this.w = 32;
    this.h = 32;
    this.color = color;
    this.number = number;
    this.directions = [ ];
    this.v = 10;
    
    this.move = function( directions ) {
        this.x += ( -directions[ LEFT ] + directions[ RIGHT ] ) * this.v;
        this.y += ( -directions[ UP ] + directions[ DOWN ] ) * this.v;
    }

    this.render = function() {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "white";
    }
}