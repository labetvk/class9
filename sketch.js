
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{

  background(30);
  drawSprites ()
  if (keyDown("right_arrow"))
  {
    box.position.x=box.position.x+3
  }
  if (keyDown("left_arrow"))
  {
    box.position.x=box.position.x-3
  }

}




