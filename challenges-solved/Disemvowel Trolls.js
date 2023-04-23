function disemvowel(str) {
    let vowels = ['o', 'e', 'i', 'a', 'u']
    return str.split('').filter((word) => !vowels.includes(word.toLowerCase())).join('')
  }