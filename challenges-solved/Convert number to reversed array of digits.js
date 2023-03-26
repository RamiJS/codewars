// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.?

function digitize(n) {
    const arr = []
    arr.push(n.toString().split(''))
    
    for(let i = 0; i < arr[0].length; i++) {
        arr[0][i] = parseInt(arr[0][i])
    }
    return arr.reverse()
}
  