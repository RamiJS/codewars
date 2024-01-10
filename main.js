function nameInStr(str, name){
 let word = [] 
  str = str.toLowerCase();
  name = name.toLowerCase();
  let index = 0
  for(let i = 0; i < str.length; i++) {
    if(str[i] === name[index])
    {
      word.push(name[index])
      index++
      
    if(word.join('') === name) return true
    }
  }
  return false
}



console.log(nameInStr('Across the rivers', 'chris'))
