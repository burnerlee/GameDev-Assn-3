const c1 = document.getElementById("left-canvas");
const ctx1 = c1.getContext("2d");
const c2 = document.getElementById("right-canvas");
const ctx2 = c2.getContext("2d");
var timeLeft = 3000;
var timeRight = 3500;
var timeStamina = 4000;
var allIntervals = [];
var allLeftKnives1 = [];
var allRightKnives1 = [];
var allUpKnives1 = [];
var allDownKnives1 = [];
var allLeftKnives2 = [];
var allRightKnives2 = [];
var allUpKnives2 = [];
var allDownKnives2 = [];
var score = 0;
var gameon = true;
var initialStamina1 = 50;
var initialStamina2 = 50;
var pause=false;
var playerPositionLeft="front";
var playerPositionRight="front";
if(document.cookie.includes('highScorePlayer')){
  document.getElementById("highScorePlayerDetails").innerText=(Cookies.get('highScorePlayer') +" ----> "+Cookies.get('highScore'));
} 
  var increaseDifficulty=setInterval(function(){
    if(pause){}
    else{
    initialStamina1--;
    initialStamina2--;
    document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1; 
    document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2; 
    timeLeft-=50;
    timeRight-=50;
    timeStamina+=25;
    allIntervals.push(increaseDifficulty);
  }},2000);
  ctx2.drawImage(front, 0, 0, 250, 450, 140, 60, 20, 30);
  ctx1.drawImage(front, 0, 0, 250, 450, 140, 60, 20, 30);
  var refreshLeftPlayer=setInterval(function(){
    if(initialStamina1<0){
      gameOver();
    }
    switch (playerPositionLeft) {
    case "left":
    ctx1.drawImage(left, 0, 0, 250, 450, 140, 60, 20, 30);
    break;
    case "right":
    ctx1.drawImage(right, 0, 0, 250, 450, 140, 60, 20, 30);
    break;
    default:
    case "front":
    ctx1.drawImage(front, 0, 0, 250, 450, 140, 60, 20, 30);
    break;
    case "back":
    ctx1.drawImage(back, 0, 0, 250, 450, 140, 60, 20, 30);
    break;


  }
allIntervals.push(refreshLeftPlayer);
  },10);
  var refreshRightPlayer=setInterval(function(){
    if(initialStamina2<0){
      gameOver();
    }
    switch (playerPositionRight) {
    case "left":
    ctx2.drawImage(left, 0, 0, 250, 450, 140, 60, 20, 30);
    break;
    case "right":
    ctx2.drawImage(right, 0, 0, 250, 450, 140, 60, 20, 30);
    break;
    default:
    case "front":
    ctx2.drawImage(front, 0, 0, 250, 450, 140, 60, 20, 30);
    break;
    case "back":
    ctx2.drawImage(back, 0, 0, 250, 450, 140, 60, 20, 30);
    break;

  }
allIntervals.push(refreshRightPlayer);
  },10);

  var provideStamina1 = setInterval(function() {
    if(pause){}
    else{
    var staminaDirection1 = (Math.floor(Math.random() * 4) + 1);
    switch (staminaDirection1) {
      case 1:
        leftAnimationStamina1();
        break;
      case 2:
        rightAnimationStamina1();
        break;
      case 3:
        upAnimationStamina1();
        break;
      case 4:
        downAnimationStamina1();
        break;

    }
  }
}, timeStamina);
  allIntervals.push(provideStamina1);
  var provideStamina2 = setInterval(function() {
    if(pause){}
    else{
    var staminaDirection2 = (Math.floor(Math.random() * 4) + 1);
    switch (staminaDirection2) {
      case 1:
        leftAnimationStamina2();
        break;
      case 2:
        rightAnimationStamina2();
        break;
      case 3:
        upAnimationStamina2();
        break;
        playRandomMinionSound();
      case 4:

        downAnimationStamina2();
        break;

    }
  }}, timeStamina);
  allIntervals.push(provideStamina2);
  var deployEnemyRight = setInterval(function() {
    if(pause){}
    else{
    var enemy1 = (Math.floor(Math.random() * 4) + 1);
    switch (enemy1) {
      case 1:
        playRandomMinionSound();
        leftAnimation1();
        break;
      case 2:
        playRandomMinionSound();
        rightAnimation1();
        break;
      case 3:
        playRandomMinionSound();
        upAnimation1();
        break;
      case 4:
        playRandomMinionSound();
        downAnimation1();
        break;

    }}
  }, timeRight);
  allIntervals.push(deployEnemyRight);
  var deployEnemyRight = setInterval(function() {
    if(pause){}
    else{
    var enemy2 = (Math.floor(Math.random() * 4) + 1);
    switch (enemy2) {
      case 1:
        playRandomMinionSound();
        leftAnimation2();
        break;
      case 2:
        playRandomMinionSound();
        rightAnimation2();
        break;
      case 3:
        playRandomMinionSound();
        upAnimation2();
        break;
      case 4:
        playRandomMinionSound();
        downAnimation2();
        break;

    }
  }}, timeRight);
  allIntervals.push(deployEnemyRight);




//functions for animations
function leftAnimationKnife1() {

  var newKnife = {
    leftK: 120,
    leftidknife: leftidknife = setInterval(function() {
      if(pause){}
      else{
      if (newKnife.leftK < -30) {


        clearInterval(newKnife.leftidknife);

      }
      newKnife.leftK = (newKnife.leftK - 1);
      ctx1.clearRect(newKnife.leftK, 75, 25, 7);
      if (newKnife.leftK != 159)
        ctx1.drawImage(leftknife, 0, 0, 800, 170, newKnife.leftK - 1, 75, 25, 7);
    }}, 10000 / 560)
  };

  allLeftKnives1.push(newKnife);


  allIntervals.push(newKnife.leftidknife);
}

function rightAnimationKnife1() {

  var newKnife = {

  rightK: 160,
    rightidknife: setInterval(function() {
      if(pause){}
      else{
      if (newKnife.rightK > 300) {
        newKnife.rightK = 120;

        clearInterval(newKnife.rightidknife);

      }
      newKnife.rightK = (newKnife.rightK + 1);
      ctx1.clearRect(newKnife.rightK, 75, 25, 7);
      if (newKnife.rightK != 121)
        ctx1.drawImage(rightknife, 0, 0, 800, 170, newKnife.rightK + 1, 75, 25, 7);
    }}, 10000 / 560)
  };
  if (gameon)
    allRightKnives1.push(newKnife);



  allIntervals.push(newKnife.rightidknife);
}

function upAnimationKnife1() {

  var newKnife = {
    upK: 45,
    upidknife: setInterval(function() {
      if(pause){}
      else{
      if (newKnife.upK < -30) {
        newKnife.upK = 100;

        clearInterval(newKnife.upidknife);

      }
      newKnife.upK = (newKnife.upK - 1);
      ctx1.clearRect(150, newKnife.upK, 7, 25);
      if (newKnife.upK != 99)
        ctx1.drawImage(upknife, 0, 0, 170, 800, 150, newKnife.upK - 1, 7, 25);
    }}, 10000 / 280)
  };
  allUpKnives1.push(newKnife);



  allIntervals.push(newKnife.upidknife);
}

function downAnimationKnife1() {

  var newKnife = {
    downK: 87,
    downidknife: setInterval(function() {
      if(pause){}
      else{
      if (newKnife.downK > 150) {
        newKnife.downK = 60;

        clearInterval(newKnife.downidknife);

      }
      newKnife.downK = (newKnife.downK + 1);
      ctx1.clearRect(150, newKnife.downK, 7, 25);
      if (newKnife.downK != 61)
        ctx1.drawImage(downknife, 0, 0, 170, 800, 150, newKnife.downK + 1, 7, 25);
    }}, 10000 / 280)
  };
  allDownKnives1.push(newKnife);



  allIntervals.push(newKnife.downidknife);
}

function leftAnimationKnife2() {

  var newKnife = {
    leftK: 120,
    leftidknife: leftidknife = setInterval(function() {
      if(pause){}
      else{
      if (newKnife.leftK < -30) {
        newKnife.leftK = 160;

        clearInterval(newKnife.leftidknife);

      }
      newKnife.leftK = (newKnife.leftK - 1);
      ctx2.clearRect(newKnife.leftK, 75, 25, 7);
      if (newKnife.leftK != 159)
        ctx2.drawImage(leftknife, 0, 0, 800, 170, newKnife.leftK - 1, 75, 25, 7);
    }}, 10000 / 560)
  };

  allLeftKnives2.push(newKnife);


  allIntervals.push(newKnife.leftidknife);
}

function rightAnimationKnife2() {

  var newKnife = {
    rightK: 160,
    rightidknife: setInterval(function() {
      if(pause){}
      else{
      if (newKnife.rightK > 300) {
        newKnife.rightK = 120;

        clearInterval(newKnife.rightidknife);

      }
      newKnife.rightK = (newKnife.rightK + 1);
      ctx2.clearRect(newKnife.rightK, 75, 25, 7);
      if (newKnife.rightK != 121)
        ctx2.drawImage(rightknife, 0, 0, 800, 170, newKnife.rightK + 1, 75, 25, 7);
    }}, 10000 / 560)
  };
  allRightKnives2.push(newKnife);



  allIntervals.push(newKnife.rightidknife);
}

function upAnimationKnife2() {

  var newKnife = {
    upK: 45,
    upidknife: setInterval(function() {
      if(pause){}
      else{
      if (newKnife.upK < -30) {
        newKnife.upK = 100;

        clearInterval(newKnife.upidknife);

      }
      newKnife.upK = (newKnife.upK - 1);
      ctx2.clearRect(150, newKnife.upK, 7, 25);
      if (newKnife.upK != 99)
        ctx2.drawImage(upknife, 0, 0, 170, 800, 150, newKnife.upK - 1, 7, 25);
    }}, 10000 / 280)
  };
  allUpKnives2.push(newKnife);



  allIntervals.push(newKnife.upidknife);
}

function downAnimationKnife2() {

  var newKnife = {
    downK: 87,
    downidknife: setInterval(function() {
     if(pause){}
      else{
      if (newKnife.downK > 150) {
        newKnife.downK = 60;

        clearInterval(newKnife.downidknife);

      }
      newKnife.downK = (newKnife.downK + 1);
      ctx2.clearRect(150, newKnife.downK, 7, 25);
      if (newKnife.downK != 61)
        ctx2.drawImage(downknife, 0, 0, 170, 800, 150, newKnife.downK + 1, 7, 25);
    }}, 10000 / 280)
  };
  allDownKnives2.push(newKnife);



  allIntervals.push(newKnife.downidknife);
}



function leftAnimation1() {
  var left = 0;
  var leftid = setInterval(function() {
    if(pause){}
    else{
    if (left > 125) {
      gameOver();
    }
    left++;
    allLeftKnives1.forEach((item, i) => {
      if (item.leftK < 20 + left) {
        score++;
        document.getElementById("score").innerText="Score: "+score
        minionHit.play();
        ctx1.clearRect(item.leftK - 1, 75, 25, 7);
      
        item.leftK = 160;
        ctx1.clearRect(left, 70, 20, 20);

        clearInterval(item.leftidknife);
        console.log("score = " + score);

        clearInterval(leftid);
        delete allLeftKnives1[i];
        left = -40;
      }
    });



    ctx1.clearRect(left, 70, 20, 20);
    ctx1.drawImage(leften, 0, 0, 100, 100, left + 1, 70, 20, 20);

  }}, 10000 / 280);
  allIntervals.push(leftid);
}

function rightAnimation1() {
  var right = 280;
  var rightid = setInterval(function() {
    if(pause){}
    else{
    if (right < 155) {
      gameOver();
    }
    right--;
    allRightKnives1.forEach((item, i) => {
      if (item.rightK + 25 > right) {
        score++;
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();
        ctx1.clearRect(item.rightK + 1, 75, 25, 7);
        item.rightK = 120;
        ctx1.clearRect(right, 70, 20, 20);

        clearInterval(item.rightidknife);
        console.log("score = " + score);

        clearInterval(rightid);
        delete allRightKnives1[i];
        right = 340;
      }
    });
    ctx1.clearRect(right, 70, 20, 20);
    ctx1.drawImage(righten, 0, 0, 100, 100, right - 1, 70, 20, 20);
  }}, 10000 / 280);
  allIntervals.push(rightid);
}

function upAnimation1() {
  var up = 0;
  var upid = setInterval(function() {
    if(pause){}
    else{
    if (up > 45) {

      gameOver();
    }
    up++;
    allUpKnives1.forEach((item, i) => {
      if (item.upK - 25 < up) {
        score++;
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();

        ctx1.clearRect(150, item.upK - 1, 7, 25);
        item.upK = 100;
        ctx1.clearRect(140, up, 20, 20);

        clearInterval(item.upidknife);
        console.log("score = " + score);

        clearInterval(upid);
        delete allUpKnives1[i];
        up = -40;
      }
    });
    ctx1.clearRect(140, up, 20, 20);
    ctx1.drawImage(fronten, 0, 0, 100, 100, 140, up + 1, 20, 20);
  }}, 10000 / 100);
  allIntervals.push(upid);
}

function downAnimation1() {
  var down = 130;
  var downid = setInterval(function() {
    if(pause){}
    else{

    if (down < 85) {
      gameOver();
    }
    down--;
    allDownKnives1.forEach((item, i) => {
      if (item.downK + 25 > down) {
        score++;
        
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();

        ctx1.clearRect(150, item.downK + 1, 7, 25);
        item.downK = 60;
        ctx1.clearRect(140, down, 20, 20);

        clearInterval(item.downidknife);
        console.log("score = " + score);

        clearInterval(downid);
        delete allDownKnives1[i];
        down = 200;
      }
    });

    ctx1.clearRect(140, down, 20, 20);
    ctx1.drawImage(backen, 0, 0, 100, 100, 140, down - 1, 20, 20);
  }}, 10000 / 100);
  allIntervals.push(downid);
}

function leftAnimation2() {
  var left = 0;
  var leftid = setInterval(function() {
    if(pause){}
    else{
    if (left > 125) {
      gameOver();
    }
    left++;
    allLeftKnives2.forEach((item, i) => {
      if (item.leftK < 20 + left) {
        score++;
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();
        ctx2.clearRect(item.leftK - 1, 75, 25, 7);
        item.leftK = 160;
        ctx2.clearRect(left, 70, 20, 20);

        clearInterval(item.leftidknife);
        console.log("score = " + score);

        clearInterval(leftid);
        delete allLeftKnives2[i];
        left = -40;
      }
    });



    ctx2.clearRect(left, 70, 20, 20);
    ctx2.drawImage(leften, 0, 0, 100, 100, left + 1, 70, 20, 20);

  }}, 10000 / 280);
  allIntervals.push(leftid);
}

function rightAnimation2() {
  var right = 280;
  var rightid = setInterval(function() {
    if(pause){}
    else{
    if (right < 155) {
      gameOver();
    }
    right--;
    allRightKnives2.forEach((item, i) => {
      if (item.rightK + 25 > right) {
        score++;
        
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();

        ctx2.clearRect(item.rightK + 1, 75, 25, 7);
        item.rightK = 120;
        ctx2.clearRect(right, 70, 20, 20);

        clearInterval(item.rightidknife);
        console.log("score = " + score);

        clearInterval(rightid);
        delete allRightKnives2[i];
        right = 340;
      }
    });
    ctx2.clearRect(right, 70, 20, 20);
    ctx2.drawImage(righten, 0, 0, 100, 100, right - 1, 70, 20, 20);
  }}, 10000 / 280);
  allIntervals.push(rightid);
}

function upAnimation2() {
  var up = 0;
  var upid = setInterval(function() {
    if(pause){}
    else{
    if (up > 45) {
      gameOver();
    }
    up++;
    allUpKnives2.forEach((item, i) => {
      if (item.upK - 25 < up) {
        score++;
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();

        ctx2.clearRect(150, item.upK - 1, 7, 25);
        item.upK = 100;
        ctx2.clearRect(140, up, 20, 20);

        clearInterval(item.upidknife);
        console.log("score = " + score);

        clearInterval(upid);
        delete allUpKnives2[i];
        up = -40;
      }
    });
    ctx2.clearRect(140, up, 20, 20);
    ctx2.drawImage(fronten, 0, 0, 100, 100, 140, up + 1, 20, 20);
  }}, 10000 / 100);
  allIntervals.push(upid);
}

function downAnimation2() {
  var down = 130;
  var downid = setInterval(function() {
    if(pause){}
    else{
    if (down < 85) {
      gameOver();
    }
    down--;
    allDownKnives2.forEach((item, i) => {
      if (item.downK + 25 > down) {
        score++;
        document.getElementById("score").innerText="Score: "+score;
        minionHit.play();

        ctx2.clearRect(150, item.downK + 1, 7, 25);
        item.downK = 60;
        ctx2.clearRect(140, down, 20, 20);

        clearInterval(item.downidknife);
        console.log("score = " + score);

        clearInterval(downid);
        delete allDownKnives2[i];
        down = 200;
      }
    });

    ctx2.clearRect(140, down, 20, 20);
    ctx2.drawImage(backen, 0, 0, 100, 100, 140, down - 1, 20, 20);
  }}, 10000 / 100);
  allIntervals.push(downid);
}
//
function gameOver() {
  allIntervals.forEach(clearInterval);
  console.log("game is Over");
  if(score>parseInt(Cookies.get('highScore'))){
    Cookies.set('highScore',score);
    Cookies.set('highScorePlayer',Cookies.get('currentPlayerName'));
  }

  gameon = false;
  $("body").load("gameover.html");
}

function hitKnife() {
  console.log("knife is hit");

}








document.addEventListener("keypress", function(e) {
  if(initialStamina1<2||initialStamina1<2){
    gameOver();
  }
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
    case 'p':
      togglePause();


  }
})

function leftAnimationStamina1() {
  var left = 0;
  var leftid = setInterval(function() {
    if(pause){}
    else{
    if (left > 125) {
      initialStamina1 += 2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playStaminaSound();
      ctx1.clearRect(left, 70, 20, 20);
      console.log("stamina increased");
      clearInterval(leftid);
      left = -40;

    }
    left++;
    allLeftKnives1.forEach((item, i) => {
      if (item.leftK < 20 + left) {


        ctx1.clearRect(item.leftK - 1, 75, 25, 7);
        item.leftK = 160;
        ctx1.clearRect(left, 70, 20, 20);

        clearInterval(item.leftidknife);

        clearInterval(leftid);
        delete allLeftKnives1[i];
        left = -40;
      }
    });



    ctx1.clearRect(left, 70, 20, 20);
    ctx1.drawImage(stamina, 0, 0, 100, 100, left + 1, 70, 20, 20);

  }}, 10000 / 280);
  allIntervals.push(leftid);
}

function rightAnimationStamina1() {
  var right = 280;
  var rightid = setInterval(function() {
    if(pause){}
    else{
    if (right < 155) {
      initialStamina1 += 2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playStaminaSound();
      ctx1.clearRect(right, 70, 20, 20);
      console.log("stamina increased");
      clearInterval(rightid);
      right = 340;

    }
    right--;
    allRightKnives1.forEach((item, i) => {
      if (item.rightK + 25 > right) {


        ctx1.clearRect(item.rightK + 1, 75, 25, 7);
        item.rightK = 120;
        ctx1.clearRect(right, 70, 20, 20);

        clearInterval(item.rightidknife);


        clearInterval(rightid);
        delete allRightKnives1[i];
        right = 340;
      }
    });
    ctx1.clearRect(right, 70, 20, 20);
    ctx1.drawImage(stamina, 0, 0, 100, 100, right - 1, 70, 20, 20);
  }}, 10000 / 280);
  allIntervals.push(rightid);
}

function upAnimationStamina1() {
  var up = 0;
  var upid = setInterval(function() {
    if(pause){}
    else{
    if (up > 45) {
      initialStamina1 += 2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playStaminaSound();
      ctx1.clearRect(140, up, 20, 20);
      console.log("stamina increased");
      clearInterval(upid);
      up = -40;

    }
    up++;
    allUpKnives1.forEach((item, i) => {
      if (item.upK - 25 < up) {


        ctx1.clearRect(150, item.upK - 1, 7, 25);
        item.upK = 100;
        ctx1.clearRect(140, up, 20, 20);

        clearInterval(item.upidknife);


        clearInterval(upid);
        delete allUpKnives1[i];
        up = -40;
      }
    });

}  }, 10000 / 100);
  allIntervals.push(upid);
}

function downAnimationStamina1() {
  var down = 130;
  var downid = setInterval(function() {
    if(pause){}
    else{
    if (down < 85) {
      initialStamina1 += 2;
      document.getElementById("leftPlayerStamina").innerText="Stamina: "+initialStamina1;
      playStaminaSound();
      ctx1.clearRect(140, down, 20, 20);
      console.log("stamina increased");
      clearInterval(downid);
      down = 200;

    }
    down--;
    allDownKnives1.forEach((item, i) => {
      if (item.downK + 25 > down) {


        ctx1.clearRect(150, item.downK + 1, 7, 25);
        item.downK = 60;
        ctx1.clearRect(140, down, 20, 20);

        clearInterval(item.downidknife);


        clearInterval(downid);
        delete allDownKnives1[i];
        down = 200;
      }
    });

    ctx1.clearRect(140, down, 20, 20);
    ctx1.drawImage(stamina, 0, 0, 100, 100, 140, down - 1, 20, 20);
  }}, 10000 / 100);
  allIntervals.push(downid);
}

function leftAnimationStamina2() {
  var left = 0;
  var leftid = setInterval(function() {
    if(pause){}
    else{
    if (left > 125) {
      initialStamina2 += 2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2; 
      playStaminaSound();
      ctx2.clearRect(left, 70, 20, 20);
      console.log("stamina increased");
      clearInterval(leftid);
      left = -40;

    }
    left++;
    allLeftKnives2.forEach((item, i) => {
      if (item.leftK < 20 + left) {


        ctx2.clearRect(item.leftK - 1, 75, 25, 7);
        item.leftK = 160;
        ctx2.clearRect(left, 70, 20, 20);

        clearInterval(item.leftidknife);

        clearInterval(leftid);
        delete allLeftKnives2[i];
        left = -40;
      }
    });



    ctx2.clearRect(left, 70, 20, 20);
    ctx2.drawImage(stamina, 0, 0, 100, 100, left + 1, 70, 20, 20);

  }}, 10000 / 280);
  allIntervals.push(leftid);
}

function rightAnimationStamina2() {
  var right = 280;
  var rightid = setInterval(function() {
    if(pause){}
    else{
    if (right < 155) {
      initialStamina2 += 2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2; 
      playStaminaSound();
      ctx2.clearRect(right, 70, 20, 20);
      console.log("stamina increased");
      clearInterval(rightid);
      right = 340;

    }
    right--;
    allRightKnives2.forEach((item, i) => {
      if (item.rightK + 25 > right) {


        ctx2.clearRect(item.rightK + 1, 75, 25, 7);
        item.rightK = 120;
        ctx2.clearRect(right, 70, 20, 20);

        clearInterval(item.rightidknife);


        clearInterval(rightid);
        delete allRightKnives2[i];
        right = 340;
      }
    });
    ctx2.clearRect(right, 70, 20, 20);
    ctx2.drawImage(stamina, 0, 0, 100, 100, right - 1, 70, 20, 20);
  }}, 10000 / 280);
  allIntervals.push(rightid);
}

function upAnimationStamina2() {
  var up = 0;
  var upid = setInterval(function() {
    if(pause){}
    else{
    if (up > 45) {
      initialStamina2 += 2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2; 
      playStaminaSound();
      ctx2.clearRect(140, up, 20, 20);
      console.log("stamina increased");
      clearInterval(upid);
      up = -40;

    }
    up++;
    allUpKnives2.forEach((item, i) => {
      if (item.upK - 25 < up) {


        ctx2.clearRect(150, item.upK - 1, 7, 25);
        item.upK = 100;
        ctx2.clearRect(140, up, 20, 20);

        clearInterval(item.upidknife);


        clearInterval(upid);
        delete allUpKnives2[i];
        up = -40;
      }
    });

  }}, 10000 / 100);
  allIntervals.push(upid);
}

function downAnimationStamina2() {
  var down = 130;
  var downid = setInterval(function() {
    if(pause){}
    else{
    if (down < 85) {
      initialStamina2 += 2;
      document.getElementById("rightPlayerStamina").innerText="Stamina: "+initialStamina2; 
      playStaminaSound();
      ctx2.clearRect(140, down, 20, 20);
      console.log("stamina increased");
      clearInterval(downid);
      down = 200;

    }
    down--;
    allDownKnives2.forEach((item, i) => {
      if (item.downK + 25 > down) {


        ctx2.clearRect(150, item.downK + 1, 7, 25);
        item.downK = 60;
        ctx2.clearRect(140, down, 20, 20);

        clearInterval(item.downidknife);


        clearInterval(downid);
        delete allDownKnives2[i];
        down = 200;
      }
    });

    ctx2.clearRect(140, down, 20, 20);
    ctx2.drawImage(stamina, 0, 0, 100, 100, 140, down - 1, 20, 20);
  }}, 10000 / 100);
  allIntervals.push(downid);
}
//pause function declaration
function togglePause() {
  if(!pause){
  console.log("the game is paused");
  pause=true;
}
else{
  console.log("resumed");
  pause=false;
}
}

function playRandomMinionSound() {
  var minionNo = (Math.floor(Math.random() * 6) + 1)
  switch (minionNo) {
    case 1:
      minion1.play();
      break;
    case 2:
      minion2.play();
      break;
    case 3:
      minion3.play();
      break;
    case 4:
      minion4.play();
      break;
    case 5:
      minion5.play();
      break;
    case 6:
      minion6.play();
      break;
  }
}
function playStaminaSound(){
  staminaSound.play();
}
