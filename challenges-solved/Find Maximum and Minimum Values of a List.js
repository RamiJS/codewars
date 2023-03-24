// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){  
    if(list.length === 0){
      return null
    }
    let lowest = list[0]
    for(let i = 0; i < list.length; i++){
        if(list[i] < lowest) {
          lowest = list[i]
        }
      }
      return lowest;
  }
  
  var max = function(list){  
    if(list.length === 0){
      return null
    }
    let highest = list[0]
    for(let i = 0; i < list.length; i++){
        if(list[i] > highest) {
          highest = list[i]
        }
      }
      return highest;
  }