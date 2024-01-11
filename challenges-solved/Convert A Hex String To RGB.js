function hexToDec (str){
    return parseInt(str, 16)
}
    

function hexStringToRGB(hexString) {
  let splitString = []
  
  if(!hexString.startsWith("#") && hexString !== 7){
      return false
  }
  
  for(let i = 1; i < hexString.length; i += 2){
      splitString.push(hexToDec(hexString.slice(i, i+2)))
  }
  
  return {
      r: splitString[0],
      g: splitString[1],
      b: splitString[2]
  }
}