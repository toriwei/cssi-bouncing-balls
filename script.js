/*
  global createCanvas circle background fill height random colorMode HSB
  */

let speed = 2;
let gravity = 0.1;
let dampening = 0.5;

let balls = [
  { x: 100, y: 0, speed: 1, diameter: 50 },
  { x: 200, y: 0, speed: 4, diameter: 15 },
  { x: 300, y: 0, speed: 5, diameter: 20 }
];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100)
  fill(random(200), 50, 80)
}

function draw() {
  background("pink");
  for (let ball of balls) {
    circle(ball.x, ball.y, ball.diameter);
    ball.speed += gravity;
    ball.y += ball.speed;
    if (ball.y > height - ball.diameter / 2) {
      ball.speed *= -dampening;
      ball.y = height - ball.diameter / 2;
    }
  }

}
