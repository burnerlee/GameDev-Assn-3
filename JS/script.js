//declaring canvas constants
const c1 = document.getElementById("left-canvas");
const ctx1 = c1.getContext("2d");
const c2 = document.getElementById("right-canvas");
const ctx2 = c2.getContext("2d");

//displaying high score from cookie if it exists
if(document.cookie.includes('highScorePlayer')){
  document.getElementById("highScorePlayerDetails").innerText=(Cookies.get('highScorePlayer') +" ----> "+Cookies.get('highScore'));
} 

//increasing difficulty with time
var increaseDifficulty=setInterval(increaseDifficultyFunc,2000);

//refresh rendering of left player
var refreshLeftPlayer=setInterval(refreshLeftPlayerFunc,10);

//refresh rendering of right player
var refreshRightPlayer=setInterval(refreshRightPlayerFunc,10);

//provide stamina to left player
var provideStamina1 = setInterval(provideStamina1Func, timeStamina);
allIntervals.push(provideStamina1);

//provide stamina to right player
var provideStamina2 = setInterval(provideStamina2Func, timeStamina);
allIntervals.push(provideStamina2);

//deploy enemies in left
var deployEnemyLeft = setInterval(deployEnemyLeftFunc, timeLeft);
allIntervals.push(deployEnemyLeft);

//deploy enemies in right
var deployEnemyRight = setInterval(deployEnemyRightFunc, timeRight);
  allIntervals.push(deployEnemyRight);

//functions to monitor all the keypress events in the game
document.addEventListener("keypress", function(e) {
  if(initialStamina1<2||initialStamina1<2){
    gameOver();
  }
  if(e.key=='p'){

      togglePause();
  }
  if(!pause){
  switch (e.key) {
    case 'a':
      ctx1.clearRect(140, 60, 20, 30);
      ctx1.drawImage(left, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina1-=2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playerPositionLeft="left";
      leftAnimationKnife1();
      break;
    case 'd':
      ctx1.clearRect(140, 60, 20, 30);
      ctx1.drawImage(right, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina1-=2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playerPositionLeft="right";
      rightAnimationKnife1();
      break;
    case 'w':
      ctx1.clearRect(140, 60, 20, 30);
      ctx1.drawImage(back, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina1-=2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playerPositionLeft="back";
      upAnimationKnife1();
      break;
    case 's':
      ctx1.clearRect(140, 60, 20, 30);
      ctx1.drawImage(front, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina1-=2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playerPositionLeft="front";
      downAnimationKnife1();
      break;
    case '4':
      ctx2.clearRect(140, 60, 20, 30);
      ctx2.drawImage(left, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina2-=2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2;
      playerPositionRight="left";
      leftAnimationKnife2();
      break;
    case '6':
      ctx2.clearRect(140, 60, 20, 30);
      ctx2.drawImage(right, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina2-=2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2;
      playerPositionRight="right";
      rightAnimationKnife2();
      break;
    case '8':
      ctx2.clearRect(140, 60, 20, 30);
      ctx2.drawImage(back, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina2-=2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2;
      playerPositionRight="back";
      upAnimationKnife2();
      break;
    case '2':
      ctx2.clearRect(140, 60, 20, 30);
      ctx2.drawImage(front, 0, 0, 250, 450, 140, 60, 20, 30);
      knifeThrow.play();
      initialStamina2-=2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2; 
      playerPositionRight="front";
      downAnimationKnife2();
      break;
   }}
})
























