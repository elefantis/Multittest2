function Explosion( game ) {
    this.active = false;
    this.x = -10;
    this.y = -10;
    let curFrame = 0;
    let animationSpeed = 1;
    let animationTime = 0;
    let currentAnimation = "explosion";
    let finalCountdown = false;
    let totalFinalTime = 60;
    let finalTime = totalFinalTime;

    this.explode = function( x, y ) {
        this.active = true;
        this.x = x - 50;
        this.y = y - 80;
    }

    this.update = function() {
        if( finalCountdown  === true ) {
            finalTime--;
        }
        if( finalTime <= 0 ) {
            finalTime = totalFinalTime;
            game.restartServer();
            finalCountdown = false;
        }
    }

    this.render = function() {
        if( !this.active ) return;
        animationTime++;
        ctx.drawImage( animationManager.getFrame( currentAnimation, curFrame ), this.x, this.y );
        // Cambia el el frame de acuerdo al tiempo de animación
        if( animationTime > animationSpeed ) {
            animationTime = 0;
            curFrame++;
            if( !animationManager.getFrame( currentAnimation, curFrame ) ) {
                this.active = false;
                finalCountdown = true;
                curFrame = 0;
            }
        }
    }
}