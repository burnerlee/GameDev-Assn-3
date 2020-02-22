const c2 = document.getElementById("right-canvas");
const ctx2 = c2.getContext("2d");
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
  