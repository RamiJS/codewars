function initials(n){
    let name = n.split(' ')
    let result = []
    
    name = name.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
})
    
    for(let i = 0; i < name.length; i++){
        if(i < name.length - 1) {
            result.push(name[i][0])
        } else {
            result.push(name[name.length-1])
        }
    }
    return result.join('.')
}

console.log(initials('Barack hussain obama'))