class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.radius = radius
      
      this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
      
        
      World.add(world, this.body);
      this.image = loadImage("paper.png")

      }
    display(){
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      //rectMode(CENTER)
      imageMode(CENTER);
      //fill(255);.radi
      image(this.image,0,0,70,70)
      pop()

      //fill("orange");

  
     // circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };