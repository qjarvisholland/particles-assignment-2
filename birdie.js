

class Birdie {
 constructor(){
  this.position = createVector();
  this.velocity = p5.Vector.random2D();
  this.acceleration = createVector();
  this.bigness = random(4,6);

  this.velocity = this.velocity.add(0.6);
  }

      move() {
 


  // Bounce off edges

  if (this.position.x >= width) {
    this.velocity.rotate(180);
  }
  if (this.position.x <= 0) {
  // this.acceleration.x = this.acceleration.mult(-1);
  this.velocity.rotate(-180);
  }
  if (this.position.y >= height) {
   // this.acceleration.y = this.acceleration.mult(-1);
   this.velocity.rotate(180);
  }
  if (this.position.y <= 0) {
   // this.acceleration.y = this.acceleration.mult(-1);
   this.velocity.rotate(-180);
  }



       this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
     // console.log(this.position.x);
    
}

// lllll


   

    display() {
      strokeWeight(this.bigness);
      stroke(255);
     //point(this.position.x, this.position.y);



    var ellipseX = this.position.x;
     var ellipseY = this.position.y;




     /*
     if (this.position.x < this.bigness/2 || 
      this.position.x > window.width - 0.5*this.bigness) {
    this.velocity.mult(-1,-1);
}
if (this.position.y < this.bigness/2 || 
     this.position.y > window.height - this.bigness) {
  this.velocity.mult(-1,-1);
}
*/

      ellipse(this.position.x,this.position.y,this.bigness/4,this.bigness/4);
    }




}

