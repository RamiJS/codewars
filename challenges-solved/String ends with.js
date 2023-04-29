function solution(str, ending){
    if(!ending.length) return true
    return str.slice(-ending.length) === ending
}

console.log(solution('samurai', 'ai'))