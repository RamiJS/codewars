function findOdd(A) {
    let result = 0
    let map = new Map()

    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i]) + 1)
        } else {
            map.set(A[i], 1)
        }
    }

    map.forEach((value, key) => (
        value % 2 === 0 ? 0 : result = key
    ))
    return result;
}

console.log(findOdd([0, 1, 0, 1, 0]))