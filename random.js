function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function random() {
    const arr = [];
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];

    for (i = 1; i <= 9; i++) {
        let range = getRandomInt(20);

        if (arr.includes(range)) {
            i--;
            continue;
        } else if (!arr1.includes(range) && arr1.length < 3) {
            arr1.push(range);
            arr.push(range);
        } else if (!arr2.includes(range) && arr2.length < 3) {
            arr2.push(range)
            arr.push(range);
        } else if (!arr3.includes(range) && arr3.length < 3) {
            arr3.push(range);
            arr.push(range);
        } else {
            i--;
            continue;
        }
    }

    return [
        arr1,
        arr2,
        arr3
    ]
}
console.log(random())
