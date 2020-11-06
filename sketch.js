





function setup() {
  createCanvas(800,400);
  
  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255); 
  
  ground.display();
  


  drawSprites();
}
