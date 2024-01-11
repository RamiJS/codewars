function HexToDec (str: string){
    return parseInt(str, 16)
  }
  
  export function hexStringToRGB(hexString: string): { r: number, g: number, b: number } {
    
    let converted: number[] = []
    
    for(let i: number = 1; i < hexString.length; i += 2){
      converted.push(HexToDec(hexString.slice(i, i+2)))
    }
    
    return { r: converted[0], g: converted[1], b: converted[2] };
  }