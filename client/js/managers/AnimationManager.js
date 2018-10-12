function AnimationManager() {
    var paths = [
        "./assets/Vehicles/Tank_light/TL_A0000.png",
        "./assets/Vehicles/Tank_light/TL_A0001.png",
        "./assets/Vehicles/Tank_light/TL_A0004.png",
        "./assets/Vehicles/Tank_light/TL_A0005.png",
        "./assets/Vehicles/Tank_light/TL_A0008.png",
        "./assets/Vehicles/Tank_light/TL_A0009.png",
        "./assets/Vehicles/Tank_light/TL_A0012.png",
        "./assets/Vehicles/Tank_light/TL_A0013.png",
        "./assets/Vehicles/Tank_light/TL_A0016.png",
        "./assets/Vehicles/Tank_light/TL_A0017.png",
        "./assets/Vehicles/Tank_light/TL_A0020.png",
        "./assets/Vehicles/Tank_light/TL_A0021.png",
        "./assets/Vehicles/Tank_light/TL_A0024.png",
        "./assets/Vehicles/Tank_light/TL_A0025.png",
        "./assets/Vehicles/Tank_light/TL_A0028.png",
        "./assets/Vehicles/Tank_light/TL_A0029.png",
    ]

     var loadImage = function( url ) {
        return new Promise( ( resolve, reject ) => {
          let img = new Image( );
          img.addEventListener( "load", e => resolve( img ) );
          img.addEventListener( "error", ( ) => {
            reject(new Error("Failed to load image's URL: ${url}"));
          });
          img.src = url;
        } );
    }

    var animations = {
        tank1Left: [],
        tank1LeftUp: [],
        tank1Up: [],
        tank1UpRight: [],
        tank1Right: [],
        tank1RightDown: [],
        tank1Down: [],
        tank1DownLeft: [],
    }

    Promise.all( [ 
        loadImage( paths[ 0 ]), 
        loadImage( paths[ 1 ] ),
        loadImage( paths[ 2 ] ),
        loadImage( paths[ 3 ] ),
        loadImage( paths[ 4 ] ),
        loadImage( paths[ 5 ] ),
        loadImage( paths[ 6 ] ),
        loadImage( paths[ 7 ] ),
        loadImage( paths[ 8 ] ),
        loadImage( paths[ 9 ] ),
        loadImage( paths[ 10 ] ),
        loadImage( paths[ 11 ] ),
        loadImage( paths[ 12 ] ),
        loadImage( paths[ 13 ] ),
        loadImage( paths[ 14 ] ),
        loadImage( paths[ 15 ] ),
     ] ).then( ( [ r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16 ] ) => {
        animations[ "tank1Left" ].push( r1 );
        animations[ "tank1Left" ].push( r2 );
        animations[ "tank1LeftUp" ].push( r3 );
        animations[ "tank1LeftUp" ].push( r4 );
        animations[ "tank1Up" ].push( r5 );
        animations[ "tank1Up" ].push( r6 );
        animations[ "tank1UpRight" ].push( r7 );
        animations[ "tank1UpRight" ].push( r8 );
        animations[ "tank1Right" ].push( r9 );
        animations[ "tank1Right" ].push( r10 );
        animations[ "tank1RightDown" ].push( r11 );
        animations[ "tank1RightDown" ].push( r12 );
        animations[ "tank1Down" ].push( r13 );
        animations[ "tank1Down" ].push( r14 );
        animations[ "tank1DownLeft" ].push( r15 );
        animations[ "tank1DownLeft" ].push( r16 );
    } );

    this.getFrame = function( animation, frame) {
        return animations[ animation ][ frame ];
    }
}