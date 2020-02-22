
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