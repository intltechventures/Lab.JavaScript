function* traverse(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            yield* traverse(item);
        } else {
            yield item;
        }
    }
}

const data = [
    1, 2,
    [
        3, 4,
        [5, 6]    
    ],
    7, 8
];

const flattened = [...traverse(data)];
console.log(flattened);         // 1,2,3,4,5,6,7,8


// https://humanwhocodes.com/snippets/2019/02/flatten-array-javascript-generator/
