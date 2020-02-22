function increaseDifficultyFunc(){
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
  }}