function distanceFromHqInBlocks(location) {
    let blocks;
    if (location === 50 || location === 34) {
        blocks = 8;
    } else if (location === 43) {
        blocks = 1;
    }
    return blocks;
};

function distanceFromHqInFeet(location) {
    return (distanceFromHqInBlocks(location)) * 264;
};

function distanceTravelledInFeet(start, end) {
    let feets;
    if (start < end) {
        feets = (end - start) * 264;
    } 
    else {
        feets = (start - end) * 264;
    }
    return feets;
};

function calculatesFarePrice(start, end) {
    let farePrice;
    let totalFeet = distanceTravelledInFeet(start, end);
    if (totalFeet < 400) {
        farePrice = 0;
    } else if (totalFeet >= 400 && totalFeet <=2000 ) {
        farePrice = (totalFeet - 400) * 0.02; 
    } else if ( totalFeet > 2000 && totalFeet < 2500) {
        farePrice = 25;
    } else if (totalFeet > 2500) {
        farePrice = "cannot travel that far";
    }
    return farePrice;
}


