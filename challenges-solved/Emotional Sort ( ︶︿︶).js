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