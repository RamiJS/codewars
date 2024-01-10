function convertToBinary(num){
    return num.toString(2).padStart(8, "0")
}


function ipToInt32(ip) {
    let x = ip.split(".").map((n) => parseInt(n))
    
    let binary = [];
    
    for(let i = 0; i < x.length; i++){
        
        binary.push(convertToBinary(x[i]))    
    }
    
   
    return parseInt(binary.join(""), 2)
}