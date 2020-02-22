function provideStamina1Func() {
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
}

function provideStamina2Func() {
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
  }}