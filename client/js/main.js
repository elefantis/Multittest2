var socket = io.connect('http://localhost:3000', { 'forceNew': true });
const canvas = document.getElementById( "canvas" )
const ctx = canvas.getContext( "2d" )
const WIDTH = 800;
const HEIGHT = 600;
const MyGame = 
{
  state: new InGame(this),
  update: function( ) {
    this.state.update( );
  },
  render: function( ) {
    this.state.render();
  }
};

// Inicializa el lienzo
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.backgroundColor = "black";
ctx.fillStyle = "white";
ctx.strokeStyle = "white";

// Inicia el ciclo del juego
;( function ( ) {
  function main( tFrame ) {
      MyGame.stopMain = window.requestAnimationFrame( main );
      // Llama al método de actualización, indica en que frame esta
      update( tFrame ); 
      render();
  }
  main(); // Comienza el ciclo
} )( );

function update( frame ){
  MyGame.update();
}

function render( ) {
  ctx.clearRect( 0, 0, WIDTH, HEIGHT );
  MyGame.render();
}