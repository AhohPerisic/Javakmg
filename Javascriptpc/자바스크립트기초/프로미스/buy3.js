//promise로 구현하기
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};


//Promise all

console.time('x');
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('x');
});



// 프로미스 체이닝
/* console.log("시작");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res));
console.log("끝");
*/