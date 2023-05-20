var brick;

function setup() {
  createCanvas(400, 400);
  brick = createSprite(200, 200, 20, 20);
}

function draw() {
  background(30);
  drawSprites();

  if (keyIsDown(RIGHT_ARROW)) {
    brick.x += 2;

  }
  if (keyIsDown(LEFT_ARROW)) {
    brick.x -= 2;

  }
  if (keyIsDown(UP_ARROW)) {
    brick.y -= 2;

  }
  if (keyIsDown(DOWN_ARROW)) {
    brick.y += 2;

  }
}




