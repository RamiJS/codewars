function perimeter(n) {
    let res = [0, 1]
    for(let i = 0; i < n; i++) {
        res.push(res[res.length-1] + res[res.length-2])
    }
    return res.reduce((acc, val) => acc +=val * 4)
}
  
console.log(perimeter(7))