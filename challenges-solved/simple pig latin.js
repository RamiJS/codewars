function pigIt(str) {
    let array = str.split(' ')
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (!/[^a-zA-Z]/.test(array[i])) {
        res.push(array[i].substring(1) + array[i][0] + 'ay')
      } else {
        res.push(array[i])
      }
    }
    return res.join(' ')
  }