function countSheeps(arrayOfSheep) {
    let present = []
    
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) present.push(arrayOfSheep[i])
    }
    return present.length
  }
  
  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]));