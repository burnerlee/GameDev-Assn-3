const c1 = document.getElementById("left-canvas");
const ctx1 = c1.getContext("2d");
const c2 = document.getElementById("right-canvas");
const ctx2 = c2.getContext("2d");

//controls animations of knife in the left part
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
  

  //controls animation of the knives in the right half
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
  