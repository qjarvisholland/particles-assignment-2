var birds = [];
var numberOfBirdies = 500;

function setup(){
	createCanvas(800,800,P2D);
colorMode(HSB,255,255,255,255);

  	for (let i = 0; i < numberOfBirdies; i++){
  	//flock[i] = new Birdie();
    birds[i] = new Birdie();
  }

}

function draw(){
  background(20,100,100,10);
// translate(height/2,width/2);
	for (var i = 0; i < numberOfBirdies; i++) {
		stroke((i*PI)%255,200,200,100);
  	
  	birds[i].display();
  	birds[i].move();
	}
}