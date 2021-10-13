const hQLocation = 42;

function distanceFromHqInBlocks(pickUpLocation) {
   return Math.abs(hQLocation- pickUpLocation)
}


function distanceFromHqInFeet (pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}


function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice (start, end) {
    let distance = distanceTravelledInFeet(start, end);
    
    if (distance >= 400 && distance <= 2000) {
        return Math.abs(distance* 0.02 - 8);
    } else if (distance <= 400) {
        return 0;
    } else if 
        (distance >= 2000 && distance < 2500) {
            return 25;
    }else {
        return 'cannot travel that far'
    }

}