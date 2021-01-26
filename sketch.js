var database;
var position;
var gameState = 0;
var playerCount, form, game, player;


function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);

  game1 = new Game();
  game1.getState();
  game1.start();
}

function draw() {
  
}