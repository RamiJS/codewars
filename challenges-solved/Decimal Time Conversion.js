// DESCRIPTION:
// Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.
// One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. 
// Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
// Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, 
// while two standard minutes equal 0.03 decimal hours and so on.
// toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". 
// Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that 
// represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!

function toIndustrial(time) {
    if(typeof time === "string"){
        let [hours, minutes] = time.split(':').map(Number);
        return Number((hours + (minutes / 60)).toFixed(2));
    } else {
        let res = time / 60
        return Number(res.toFixed(2));
    }
}

function toNormal(time){
    let hours = Math.floor(time)
    let minutes = Math.round((time - hours) * 60)
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    return hours + ':' + minutes
}