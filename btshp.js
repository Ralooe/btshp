
var letters = "ABCDEFGHIJ";

function coinFlip() {
  return Math.round(Math.random());
}

function newNumber() {
  return Math.floor(Math.random() * 10);
}

function boatSelector(quantity, size){
  var boatSelection = [];
  for(y = 0 ; y < quantity; y++){
    var aBoat = [];
    aBoat = boatOrientation(size);
    boatSelection.push(aBoat);
  }
  return boatSelection;
}

function boatOrientation(size) {
  var flip = coinFlip();
  if (flip === 1) {
    return verticalBoat(size);
  } else {
    return horizontalBoat(size);
  }
}


function buildSet(rL, rN) {
  if (typeof rL === "number") {
    var letterChoice = letters.charAt(rL);
    return letterChoice + rN.toString();
  } else {
    return rL + rN.toString();
  }
}

function horizontalBoat(size) {
  
  var randNumber = newNumber();
  var randLetter = letters.charAt(newNumber());
  var hBoat = [];

  if ((randNumber - size) < -1) {
    for (i = 0; i < size; i++) {
     
      var randSet = buildSet(randLetter, randNumber)
      hBoat.push(randSet);
      randNumber++;
    }
  } else if ((randNumber + size) > 10) {

    for (i = 0; i < size; i++) {
      
      var randSet = buildSet(randLetter, randNumber)
      hBoat.push(randSet);
      randNumber--;
    }
  } else {
    var flip = coinFlip();
    for (i = 0; i < size; i++) {
      
      var randSet = buildSet(randLetter, randNumber)
      hBoat.push(randSet);
      if (flip === 1) {
        randNumber++;
      } else {
        randNumber--;
      }
    }
  }
  return hBoat;
}

function verticalBoat(size) {
  
  var randNumber = newNumber();
  var randLetter = newNumber();
  var vBoat = [];

  if ((randLetter - size) < -1) {
    for (i = 0; i < size; i++) {
      
      var randSet = buildSet(randLetter, randNumber)
      vBoat.push(randSet);
      randLetter++;
    }
  } else if ((randLetter + size) > 10) {

    for (i = 0; i < size; i++) {
      
      var randSet = buildSet(randLetter, randNumber)
      vBoat.push(randSet);
      randLetter--;
    }
  } else {
    var flip = coinFlip();
    for (i = 0; i < size; i++) {
      
      var randSet = buildSet(randLetter, randNumber)
      vBoat.push(randSet);
      if (flip === 1) {
        randLetter++;
      } else {
        randLetter--;
      }
    }
  }
  return vBoat;
}


console.log(boatSelector(4,2));
