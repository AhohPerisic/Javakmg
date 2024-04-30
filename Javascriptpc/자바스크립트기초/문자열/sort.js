let arr = [1, 5, 4, 2 ,3];
let arr2 = ["2","4","5","5","9"];
arr.sort();

console.log(arr);
console.log(arr2); // 문자열은 안됨.

arr.sort((a,b) => {
    console.log(a, b);
    return a-b;
});

const result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0)

console.log(result);