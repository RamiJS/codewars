function findShort(s) {
    return s.split(' ').reduce((acc, val) => {return acc.length < val.length ? acc :  val}).length
  }
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // Output: "who"
  