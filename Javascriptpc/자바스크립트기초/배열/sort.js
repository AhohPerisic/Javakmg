let arr = [27, 8, 5, 13];

arr.sort((a, b) => {
    console.log(a,b);
    return a - b;
});

// 8, 27, 5, 13
// 5, 8, 27, 13



console.log(arr); 