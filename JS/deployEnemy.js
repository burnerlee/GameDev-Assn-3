function deployEnemyLeftFunc() {
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
  }

function deployEnemyRightFunc() {
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
  }}

