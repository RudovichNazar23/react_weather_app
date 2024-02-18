
function SpeedConverter(milesSpeed){
    const numMilesSpeed = Number(milesSpeed);
    const kmSpeed = numMilesSpeed * 1.609344;
    return Math.round(kmSpeed);
};

export default SpeedConverter;
