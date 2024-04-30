
let arr = [1, 2, 3, 4, 5];

/*
let result = 0;
arr.forEach((num) => {
    result += num;
});
*/

const result = arr.reduce((prev, cur) => {
    return prev + cur;
}, 100);


console.log(result); 