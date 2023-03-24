// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.

function divCon(x){
    let nums = 0
    let strs = 0
    
    for(let i = 0; i < x.length; i++){
      if(typeof x[i] == 'string'){
        strs += parseInt(x[i])
      } else if(typeof x[i] == 'number'){
        nums += parseInt(x[i])
      }
    }
    return nums - strs
  }