distanceFromHqInBlocks(43); // should return 1
distanceFromHqInBlocks(50); // should return 8

function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    return Math.abs(someValue - hq);
  }
  
  distanceFromHqInFeet(43); // should return 264

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  distanceTravelledInFeet(34, 38); // should return 1056

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  
  
