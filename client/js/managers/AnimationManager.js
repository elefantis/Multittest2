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
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0000.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0001.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0004.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0005.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0008.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0009.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0012.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0013.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0016.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0017.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0020.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0021.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0024.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0025.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0028.png",
        "./assets/Vehicles/Tank_light/Tank_light_B/TL_B0029.png",
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
        tank2Left: [],
        tank2LeftUp: [],
        tank2Up: [],
        tank2UpRight: [],
        tank2Right: [],
        tank2RightDown: [],
        tank2Down: [],
        tank2DownLeft: [],
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
        loadImage( paths[ 16 ]), 
        loadImage( paths[ 17 ] ),
        loadImage( paths[ 18 ] ),
        loadImage( paths[ 19 ] ),
        loadImage( paths[ 20 ] ),
        loadImage( paths[ 21 ] ),
        loadImage( paths[ 22 ] ),
        loadImage( paths[ 23 ] ),
        loadImage( paths[ 24 ] ),
        loadImage( paths[ 25 ] ),
        loadImage( paths[ 26 ] ),
        loadImage( paths[ 27 ] ),
        loadImage( paths[ 28 ] ),
        loadImage( paths[ 29 ] ),
        loadImage( paths[ 30 ] ),
        loadImage( paths[ 31 ] ),
     ] ).then( ( [ r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32 ] ) => {
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
        animations[ "tank2Left" ].push( r17 );
        animations[ "tank2Left" ].push( r18 );
        animations[ "tank2LeftUp" ].push( r19 );
        animations[ "tank2LeftUp" ].push( r20 );
        animations[ "tank2Up" ].push( r21 );
        animations[ "tank2Up" ].push( r22 );
        animations[ "tank2UpRight" ].push( r23 );
        animations[ "tank2UpRight" ].push( r24 );
        animations[ "tank2Right" ].push( r25 );
        animations[ "tank2Right" ].push( r26 );
        animations[ "tank2RightDown" ].push( r27 );
        animations[ "tank2RightDown" ].push( r28 );
        animations[ "tank2Down" ].push( r29 );
        animations[ "tank2Down" ].push( r30 );
        animations[ "tank2DownLeft" ].push( r31 );
        animations[ "tank2DownLeft" ].push( r32 );
    } );

    this.getFrame = function( animation, frame) {
        return animations[ animation ][ frame ];
    }
}