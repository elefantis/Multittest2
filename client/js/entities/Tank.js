function Tank( x, y, color, number ) {
    this.x = x;
    this.y = y;
    this.w = 32;
    this.h = 32;
    this.color = color;
    this.number = number;

    this.render = function() {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "white";
    }
}