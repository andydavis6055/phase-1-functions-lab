function distanceFromHqInBlocks(somevalue1){
        return Math.abs(somevalue1 - 42)
}
function distanceFromHqInFeet(somevalue2){
    return (Math.abs(distanceFromHqInBlocks(somevalue2) * 264)) 
}
function distanceTravelledInFeet(start, destination){
    return (Math.abs(destination - start) * 264) 
}
function calculatesFarePrice(start, destination){
        if (400 > distanceTravelledInFeet(start, destination)){
            return 0
    }       if ((2000 > distanceTravelledInFeet(start, destination)) && (distanceTravelledInFeet(start, destination) > 400)){
            return (distanceTravelledInFeet(start, destination) - 400) * .02
    }       if ((2000 < distanceTravelledInFeet(start, destination)) && (distanceTravelledInFeet(start, destination)) < 2500) {
            return 25
    }       else {
            return 'cannot travel that far'
    }
}