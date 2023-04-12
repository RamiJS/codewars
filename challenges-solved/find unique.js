function findUniq(arr) {
    let uniq = arr[0]
    for(let i = 0; i < arr.length; i++) {
        arr[i] === uniq ? uniq : uniq = arr[i] 
    }
    
    return uniq
}
  

console.log(findUniq([ 1, 3, 1, 1, 1 ]))