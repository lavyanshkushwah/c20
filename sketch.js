var f,m



function setup() {

  createCanvas(1200,800);
  f=createSprite(200, 200, 50, 80);
  m=createSprite(400, 200, 80, 30);
f.shapeColor="red"
m.shapeColor="red"

}

function draw() {
  background(0);  
  m.x=mouseX;
  m.y=mouseY;
  if(m.x-f.x<f.width/2+m.width/2
    && f.x-m.x<f.width/2+m.width/2
    && m.y-f.y<f.height/2+m.height/2
    && f.y-m.y<f.height/2+m.height/2){

      f.shapeColor="blue"
      m.shapeColor="blue"



  }
  else{
    f.shapeColor="red"
    m.shapeColor="red"


  }
  
  
  
  drawSprites();
}