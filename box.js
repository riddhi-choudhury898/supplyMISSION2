class Box{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height; 
  }
  display(){
    var angle = this.body.angle;
    push();
    rotate(angle);
    pop();
    rectMode(CENTER);
    rect(425, 630, 10, 45);
    rect(355, 630, 10, 45);
    rect(390, 647, 60,10);
    
  }
};