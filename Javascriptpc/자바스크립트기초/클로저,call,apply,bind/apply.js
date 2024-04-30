const nums = [3, 10, 1, 6, 4];

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])

const maxNum = Math.max.call(null, ...nums);
// = Math.min.apply(null, 3, 10 , 1, 6, 4)

console.log(minNum);
console.log(maxNum);

