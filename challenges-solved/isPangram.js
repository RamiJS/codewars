function isPangram(string){
    const word = new Set(string.toLowerCase().match(/[a-z]/g))
    return word.size === 26
}


var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string))