function nonforcefulPolice() {
      if(forRandom === "a") {var randomNumber = Math.floor(Math.random() * 25) + 1;
      var policeResults;
      }
      else{var randomNumber = Math.floor(Math.random() * 6) + 1;
      var policeResults; 
      }
  switch (randomNumber) {
    case 1:
      policeResults = "took a beat down by police.";
      break;
    case 2:
      policeResults = "took a beatdown by hired thugs.";
      break;
    case 3:
      policeResults = "got blasted with tear gas.";
      break;
    case 4:
      policeResults = "got blasted with blue dye infused fire hose spray.";
      break;
    case 5:
      policeResults = "got arrested.";
    //   break;
    default:
      // he stays human
      policeResults = "came through unscathed.";
      break;
  }

  alert ("During your you protest you " + policeResults)
};