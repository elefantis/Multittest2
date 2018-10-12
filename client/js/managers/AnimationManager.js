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
        "./assets/FX/Vehicle Explosion/Ve0001.png",
        "./assets/FX/Vehicle Explosion/Ve0002.png",
        "./assets/FX/Vehicle Explosion/Ve0003.png",
        "./assets/FX/Vehicle Explosion/Ve0004.png",
        "./assets/FX/Vehicle Explosion/Ve0005.png",
        "./assets/FX/Vehicle Explosion/Ve0006.png",
        "./assets/FX/Vehicle Explosion/Ve0007.png",
        "./assets/FX/Vehicle Explosion/Ve0008.png",
        "./assets/FX/Vehicle Explosion/Ve0009.png",
        "./assets/FX/Vehicle Explosion/Ve0010.png",
        "./assets/FX/Vehicle Explosion/Ve0011.png",
        "./assets/FX/Vehicle Explosion/Ve0012.png",
        "./assets/FX/Vehicle Explosion/Ve0013.png",
        "./assets/FX/Vehicle Explosion/Ve0014.png",
        "./assets/FX/Vehicle Explosion/Ve0015.png",
        "./assets/FX/Vehicle Explosion/Ve0016.png",
        "./assets/FX/Vehicle Explosion/Ve0017.png",
        "./assets/FX/Vehicle Explosion/Ve0018.png",
        "./assets/FX/Vehicle Explosion/Ve0019.png",
        "./assets/FX/Vehicle Explosion/Ve0020.png",
        "./assets/FX/Vehicle Explosion/Ve0021.png",
        "./assets/FX/Vehicle Explosion/Ve0022.png",
        "./assets/FX/Vehicle Explosion/Ve0023.png",
        "./assets/FX/Vehicle Explosion/Ve0024.png",
        "./assets/FX/Vehicle Explosion/Ve0025.png",
        "./assets/FX/Vehicle Explosion/Ve0026.png",
        "./assets/FX/Vehicle Explosion/Ve0027.png",
        "./assets/FX/Vehicle Explosion/Ve0028.png",
        "./assets/FX/Vehicle Explosion/Ve0029.png",
        "./assets/FX/Vehicle Explosion/Ve0030.png",
        "./assets/FX/Vehicle Explosion/Ve0031.png",
        "./assets/FX/Vehicle Explosion/Ve0032.png",
        "./assets/FX/Vehicle Explosion/Ve0033.png",
        "./assets/FX/Vehicle Explosion/Ve0034.png",
        "./assets/FX/Vehicle Explosion/Ve0035.png",
        "./assets/FX/Vehicle Explosion/Ve0036.png",
        "./assets/FX/Vehicle Explosion/Ve0037.png",
        "./assets/FX/Vehicle Explosion/Ve0038.png",
        "./assets/FX/Vehicle Explosion/Ve0039.png",
        "./assets/FX/Vehicle Explosion/Ve0040.png",
        "./assets/FX/Vehicle Explosion/Ve0041.png",
        "./assets/FX/Vehicle Explosion/Ve0042.png",
        "./assets/FX/Vehicle Explosion/Ve0043.png",
        "./assets/FX/Vehicle Explosion/Ve0044.png",
        "./assets/FX/Vehicle Explosion/Ve0045.png",
        "./assets/FX/Vehicle Explosion/Ve0046.png",
        "./assets/FX/Vehicle Explosion/Ve0047.png",
        "./assets/FX/Vehicle Explosion/Ve0048.png",
        "./assets/FX/Vehicle Explosion/Ve0049.png",
        "./assets/FX/Vehicle Explosion/Ve0050.png",
        "./assets/FX/Vehicle Explosion/Ve0051.png",
        "./assets/FX/Vehicle Explosion/Ve0052.png",
        "./assets/FX/Vehicle Explosion/Ve0053.png",
        "./assets/FX/Vehicle Explosion/Ve0054.png",
        "./assets/FX/Vehicle Explosion/Ve0055.png",
        "./assets/FX/Vehicle Explosion/Ve0056.png",
        "./assets/FX/Vehicle Explosion/Ve0057.png",
        "./assets/FX/Vehicle Explosion/Ve0058.png",
        "./assets/FX/Vehicle Explosion/Ve0059.png",
        "./assets/FX/Vehicle Explosion/Ve0060.png",
        "./assets/FX/Vehicle Explosion/Ve0061.png",
        "./assets/FX/Vehicle Explosion/Ve0062.png",
        "./assets/FX/Vehicle Explosion/Ve0063.png",
        "./assets/Map_objects/cracks1.png",
        "./assets/Map_objects/cracks2.png",
        "./assets/Map_objects/crater1.png",
        "./assets/Map_objects/crater2.png",
        "./assets/Map_objects/crater3.png",
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
        explosion: [],
        mapObjects: []
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
        loadImage( paths[ 32 ] ),
        loadImage( paths[ 33 ] ),
        loadImage( paths[ 34 ] ),
        loadImage( paths[ 35 ] ),
        loadImage( paths[ 36 ] ),
        loadImage( paths[ 37 ] ),
        loadImage( paths[ 39 ] ),
        loadImage( paths[ 39 ] ),
        loadImage( paths[ 40 ] ),
        loadImage( paths[ 41 ] ),
        loadImage( paths[ 42 ] ),
        loadImage( paths[ 43 ] ),
        loadImage( paths[ 44 ] ),
        loadImage( paths[ 45 ] ),
        loadImage( paths[ 46 ] ),
        loadImage( paths[ 47 ] ),
        loadImage( paths[ 48 ] ),
        loadImage( paths[ 49 ] ),
        loadImage( paths[ 50 ] ),
        loadImage( paths[ 51 ] ),
        loadImage( paths[ 52 ] ),
        loadImage( paths[ 53 ] ),
        loadImage( paths[ 54 ] ),
        loadImage( paths[ 55 ] ),
        loadImage( paths[ 56 ] ),
        loadImage( paths[ 57 ] ),
        loadImage( paths[ 58 ] ),
        loadImage( paths[ 59 ] ),
        loadImage( paths[ 60 ] ),
        loadImage( paths[ 61 ] ),
        loadImage( paths[ 62 ] ),
        loadImage( paths[ 63 ] ),
        loadImage( paths[ 64 ] ),
        loadImage( paths[ 65 ] ),
        loadImage( paths[ 66 ] ),
        loadImage( paths[ 67 ] ),
        loadImage( paths[ 68 ] ),
        loadImage( paths[ 69 ] ),
        loadImage( paths[ 70 ] ),
        loadImage( paths[ 71 ] ),
        loadImage( paths[ 72 ] ),
        loadImage( paths[ 73 ] ),
        loadImage( paths[ 74 ] ),
        loadImage( paths[ 75 ] ),
        loadImage( paths[ 76 ] ),
        loadImage( paths[ 77 ] ),
        loadImage( paths[ 78 ] ),
        loadImage( paths[ 79 ] ),
        loadImage( paths[ 80 ] ),
        loadImage( paths[ 81 ] ),
        loadImage( paths[ 82 ] ),
        loadImage( paths[ 83 ] ),
        loadImage( paths[ 84 ] ),
        loadImage( paths[ 85 ] ),
        loadImage( paths[ 86 ] ),
        loadImage( paths[ 87 ] ),
        loadImage( paths[ 88 ] ),
        loadImage( paths[ 89 ] ),
        loadImage( paths[ 90 ] ),
        loadImage( paths[ 91 ] ),
        loadImage( paths[ 92 ] ),
        loadImage( paths[ 93 ] ),
        loadImage( paths[ 94 ] ),
        loadImage( paths[ 95 ] ),
        loadImage( paths[ 96 ] ),
        loadImage( paths[ 97 ] ),
        loadImage( paths[ 98 ] ),
        loadImage( paths[ 99 ] ),
     ] ).then( ( [ r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32,
    r33, r34, r35, r36, r37, r38, r39, r40, r41, r42, r43, r44, r45, r46, r47, r48, r49, r50, r51, r52, r53
    , r54, r55, r56, r57, r58, r59, r60, r61, r62, r63, r64, r65, r66, r67, r68, r69, r70, r71, r72, r73, r74
    , r75, r76, r77, r78, r79, r80, r81, r82, r83, r84, r85, r86, r87, r88, r89, r90, r91, r92, r93, r94, r95, r96, r97, r98 ] ) => {
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

        animations[ "explosion" ].push( r33 );
        animations[ "explosion" ].push( r34 );
        animations[ "explosion" ].push( r35 );
        animations[ "explosion" ].push( r36 );
        animations[ "explosion" ].push( r37 );
        animations[ "explosion" ].push( r38 );
        animations[ "explosion" ].push( r39 );
        animations[ "explosion" ].push( r40 );
        animations[ "explosion" ].push( r41 );
        animations[ "explosion" ].push( r42 );
        animations[ "explosion" ].push( r43 );
        animations[ "explosion" ].push( r44 );
        animations[ "explosion" ].push( r45 );
        animations[ "explosion" ].push( r46 );
        animations[ "explosion" ].push( r47 );
        animations[ "explosion" ].push( r48 );
        animations[ "explosion" ].push( r49 );
        animations[ "explosion" ].push( r50 );
        animations[ "explosion" ].push( r51 );
        animations[ "explosion" ].push( r52 );
        animations[ "explosion" ].push( r53 );
        animations[ "explosion" ].push( r54 );
        animations[ "explosion" ].push( r55 );
        animations[ "explosion" ].push( r56 );
        animations[ "explosion" ].push( r57 );
        animations[ "explosion" ].push( r58 );
        animations[ "explosion" ].push( r59 );
        animations[ "explosion" ].push( r60 );
        animations[ "explosion" ].push( r61 );
        animations[ "explosion" ].push( r62 );
        animations[ "explosion" ].push( r63 );
        animations[ "explosion" ].push( r64 );
        animations[ "explosion" ].push( r65 );
        animations[ "explosion" ].push( r66 );
        animations[ "explosion" ].push( r67 );
        animations[ "explosion" ].push( r68 );
        animations[ "explosion" ].push( r69 );
        animations[ "explosion" ].push( r70 );
        animations[ "explosion" ].push( r71 );
        animations[ "explosion" ].push( r72 );
        animations[ "explosion" ].push( r73 );
        animations[ "explosion" ].push( r74 );
        animations[ "explosion" ].push( r75 );
        animations[ "explosion" ].push( r76 );
        animations[ "explosion" ].push( r77 );
        animations[ "explosion" ].push( r78 );
        animations[ "explosion" ].push( r79 );
        animations[ "explosion" ].push( r80 );
        animations[ "explosion" ].push( r81 );
        animations[ "explosion" ].push( r82 );
        animations[ "explosion" ].push( r83 );
        animations[ "explosion" ].push( r84 );
        animations[ "explosion" ].push( r85 );
        animations[ "explosion" ].push( r86 );
        animations[ "explosion" ].push( r87 );
        animations[ "explosion" ].push( r88 );
        animations[ "explosion" ].push( r89 );
        animations[ "explosion" ].push( r90 );
        animations[ "explosion" ].push( r91 );
        animations[ "explosion" ].push( r92 );
        animations[ "explosion" ].push( r93 );


        animations[ "mapObjects" ].push( r94 );
        animations[ "mapObjects" ].push( r95 );
        animations[ "mapObjects" ].push( r96 );
        animations[ "mapObjects" ].push( r97 );
        animations[ "mapObjects" ].push( r98 );
            } );

    this.getFrame = function( animation, frame) {
        return animations[ animation ][ frame ];
    }
}