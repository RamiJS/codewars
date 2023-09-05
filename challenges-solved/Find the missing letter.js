function findMissingLetter(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let startingIndex = alphabet.toLowerCase().indexOf(array[0].toLowerCase());
    let result = '';
    
    if(array.length < 2) return;
    
    for (let i = 0; i < array.length; i++) {
        if (alphabet.includes(array[i].toLowerCase()) && array[i].toLowerCase() === alphabet[startingIndex + i]) {
            // Continue searching
        } else {
            result = alphabet[startingIndex + i];
            if (array[i].match(/[A-Z]/)) {
                return result.toUpperCase();
            } else {
                return result.toLowerCase();
            }
        }
    }
}

console.log(findMissingLetter(['O','Q','R','S']))