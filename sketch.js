var bg, hammerS, google, maggelan, pirate, math, pop, qm;
var quizMaster
var button1,button2,button3,button4;
var score = 0;
var minute = 1;
var time = 30;

var scoreText, timerText
function preload(){

  bg = loadImage("Assets/BGimage.jpg");
  hammerS = loadImage("Assets/download.png");
  google = loadImage("Assets/Google image.jpg");
  maggelan = loadImage("Assets/Maggelan.jpg");
  pirate = loadImage("Assets/Math Image.jpg");
  math = loadImage("Assets/Pirate image.jpg");
  pop = loadImage("Assets/Population.jpg");
  qm = loadImage("Assets/quizmaster.png ");
  }


function setup() {
  createCanvas(windowWidth,windowHeight);

  quizMaster = createSprite(width-100,height-100,10,10);
  quizMaster.addImage(qm);
  quizMaster.scale = 0.8;

 // timer();
  
  scoreText = createElement("h2")
  scoreText.position(50,50);

  timerText = createElement("h2");
  timerText.position(width/2,50);


  
button1 = createButton("Bill Gates")
button1.position(50,height-160);
button1.size(250,150);
button1.class("buttonStyle");

button2 = createButton("Tim cook")
button2.position(350,height-160);
button2.size(250,150);
button2.class("buttonStyle");

button3 = createButton("Sundar Pichai")
button3.position(650,height-160);
button3.size(250,150);
button3.class("buttonStyle");
button3.mouseClicked(scoreKeeper);

button4 = createButton("Elon Musk")
button4.position(950,height-160);
button4.size(250,150);
button4.class("buttonStyle");

}



function draw() {
  background(bg);  
  timer();
textSize(30)
fill("white")
text("Question 1 - Who is the current CEO of google?",width/2-300,height/2)



image(google,width-350,30,300,150)

scoreText.html(`Score=${score}`)

timerText.html(`Timer = ${time}`)
  

console.log(score)


drawSprites();


}

function timer(){

  setInterval(updatecountdown,1000)
}

function updatecountdown(){
  var m = Math.floor(time/60)
  var sec = time%60
  time = time -1
  console.log(time)
timerText.html(`Timer = ${time}`)
  
}




function scoreKeeper(){
  console.log("I am here")
  button3.class("change");
  score+= 5
  console.log(score)
  scoreText.html(`Score=${score}`)

}

