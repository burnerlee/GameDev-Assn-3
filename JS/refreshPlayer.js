const c1 = document.getElementById("left-canvas");
const ctx1 = c1.getContext("2d");
const c2 = document.getElementById("right-canvas");
const ctx2 = c2.getContext("2d");
function refreshLeftPlayerFunc(){
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
  }

function refreshRightPlayerFunc(){
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
  }