function friend(friends){
    let realones = []
    
    for(let i = 0; i < friends.length; i++){
      if(friends[i].length === 4) realones.push(friends[i])
    }
    return realones
  }
  
  console.log(friend(["Ryan", "Kieran", "Mark"]));