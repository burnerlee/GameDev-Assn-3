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
  
  