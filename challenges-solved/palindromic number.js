function palindromize(number, iterations = 0){
  let str = number.toString().split('').reverse().join('')
if(parseInt(str) === number) {
 return `${iterations} ${number}`
}

let newNum = parseInt(str) + number 

return palindromize(newNum, iterations + 1)
}

console.log(palindromize(265));
