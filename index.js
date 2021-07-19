function distanceFromHqInBlocks(street){
    let blocks = Math.abs(street - 42)
    return blocks;
}

function distanceFromHqInFeet(blocks){
    let feet = Math.abs(blocks - 42) * 264
    return feet;
}

function distanceTravelledInFeet(start, end){
    let distance = Math.abs(start - end) * 264
    return distance;
}

function calculatesFarePrice(start, end){
    let distance = Math.abs(start - end) * 264
    if (distance < 400){
        return 0;
    } 
    else if (distance > 400 && distance < 2000){
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}