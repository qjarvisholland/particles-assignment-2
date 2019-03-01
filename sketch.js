//var Birdie;
// = require('./birdie'); 
// var birdie = new Birdie();
var birds = [];
var numberOfBirdies = 500;

function setup(){
	createCanvas(800,800,P2D);


  for (let i = 0; i < numberOfBirdies; i++){
  //flock[i] = new Birdie();
    birds[i] = new Birdie();
  }

}

function draw(){
	
  background(20,10);
  
// translate(height/2,width/2);

for (var i = 0; i < numberOfBirdies; i++) {
  
  birds[i].move();
  birds[i].display();
}



}

