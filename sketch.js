let ghostX = 200;
let ghostY = -50
let score = 0;
let roadOffset = 0;
let speed = 5;
let gameOver = false;

function setup() {
  createCanvas(400, 500);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
}
function draw() {
  background(20,35,25);

  fill(50,50,60);
  noStroke();
  rect(200,250,200,500);

  stroke(255,120,0);
  strokeWeight(4);
  line(100,0,100,500);
  line(300,0,300,500);
  noStroke();
  

  for (let y = -125; y < 500; y += 125) {
    let movingY = y + roadOffset;

    fill(255, 200, 0);
    rect(200, movingY, 8, 40);

    textSize(35);
    text("🏚️", 45, movingY);
    text("🌲", 65, movingY + 60);
    text("🌲", 340, movingY);
    text("🏚️", 355, movingY + 60);
  }
  if (gameOver) {
    fill(0, 0, 0, 180);
    rect(200, 250, 400, 500);

    fill(255, 60, 60);
    textSize(34);
    text("💀 CRASHED! 💀", 200, 200);
    fill(255);
    textSize(20);
    text("Final Score: " + score, 200, 245);
    text("Click to Drive Again", 200, 290);
    return;
  }
 roadOffset += speed;
 if (roadOffset >= 125) {
  roadOffset = 0;
}
  let carX = constrain(mouseX, 125, 275);
  let carY = 420;

  fill(255, 100, 0); 
  rect(carX, carY, 36, 60, 8);
  fill(30, 30, 40);  
  rect(carX, carY - 8, 28, 18, 4); 
  fill(255, 255, 150); 
  rect(carX - 10, carY - 28, 8, 5);
  rect(carX + 10, carY - 28, 8, 5);

  textSize(45);
  text("👻", ghostX, ghostY);
  ghostY += speed;

  if (ghostY > 530) {
    score++;
    speed += 0.3; 
    ghostY = -40;
    ghostX = random(130, 270); 
  }
  if (dist(carX, carY, ghostX, ghostY) < 40) {
    gameOver = true;
  }
  fill(255, 165, 0);
  textSize(22);
  text("🎃 Dodged: " + score, 200, 30);
  }

  function mousePressed() {
  if (gameOver) {
    score = 0;
    speed = 5;
    ghostY = -50;
    ghostX = random(130, 270);
    gameOver = false;
  }
}
