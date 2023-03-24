// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let hours = h * 1000 * 60 * 60
    let minutes = m * 1000 * 60
    let seconds = s * 1000
    let sum = hours + minutes + seconds
    return sum
  }