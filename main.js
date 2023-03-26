function toNormal(time){
    let hours = Math.floor(time)
    let minutes = Math.round((time - hours) * 60)
    if(minutes === 60) {
        hours++
        minutes= 0
    } else if(minutes < 10){
        minutes = '0' + minutes
    }
    return hours + ':' + minutes
}

console.log(toNormal(1.05));