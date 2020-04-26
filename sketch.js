var ball,img,paddle,ball_img,paddle_img;
function preload() {
 
  ball_image = loadImage('ball.png');
  paddle_img = loadImage('paddle.png');
   
}
function setup() {
  createCanvas(400, 400);
   
  ball = createSprite(200,200,10,10);
  paddle = createSprite(360,200,5,70);
  
  
  
  ball.addAnimation("ball", ball_image);
  ball.size = 0.20;
  
  paddle.addAnimation("paddle", paddle_img);
  paddle.scale = 0.75;
  
  
 
  ball.velocityX = 7;
  ball.velocityY = 2;
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  

  
  ball.bounceOff(paddle);
  
 randomVelocity();
 
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  
  
  
  if(keyDown(UP_ARROW))
  {
    
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   
    paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

function randomVelocity()
{
 if (ball.isTouching(paddle)){
  ball.velocityY = random(1,4);
 }
}

