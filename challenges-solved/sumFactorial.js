function sumFactorial(n){
    let res = 0
    n.map((num) => {
        let current = 1
        for(let i = 1; i <= num; i++){
            current *= i
        }
        res += current
})
    return res
}

console.log(sum([4, 6]))