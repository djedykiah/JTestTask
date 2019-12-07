export const average = (someArr) => {
    let min = someArr[0];

    let max = min;

    for (let i = 1; i < someArr.length; ++i) {
        if (someArr[i] > max) {
            max = someArr[i];
        }
        if (someArr[i] < min) {
            min = someArr[i];
        }
    }

    return (min + max) / 2;
};
