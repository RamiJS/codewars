// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// More in test cases!

// Notes:

// The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
// All emotions will be valid

function sortEmotions(arr, order) {
    // Check if the array is empty, return an empty array if it is
    if (!arr.length) return [];

    // Create an empty array to hold the numbers corresponding to each emotion
    let nums = [];

    // Create an empty array to hold the sorted emotions
    let result = [];

    // Define a hash table that maps each number to a corresponding emotion
    const hashTable = {
        0: ':D',
        1: ':)',
        2: ':|',
        3: ':(',
        4: 'T_T'
    };

    // Loop through the input array and push the corresponding numbers to the nums array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === hashTable[0]) {
            nums.push(0);
        } else if (arr[i] === hashTable[1]) {
            nums.push(1);
        } else if (arr[i] === hashTable[2]) {
            nums.push(2);
        } else if (arr[i] === hashTable[3]) {
            nums.push(3);
        } else if (arr[i] === hashTable[4]) {
            nums.push(4);
        }
    }

    // Sort the nums array based on the order's value (true or false)
    if (order) {
        nums.sort((a, b) => { return a - b }).map(key => hashTable[key])
    } else {
        nums.sort((a, b) => { return b - a }).map(key => hashTable[key])
    }

    // Loop through the sorted nums array and push the corresponding emotions to the result array
    for (let i = 0; i < nums.length; i++) {
        result.push(hashTable[nums[i]]);
    }

    // Return the sorted emotions array
    return result;
}