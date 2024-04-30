// 1. 배열 구조 분해 하기

let users = ['Mike','Tom','Jane'];

let [user1, user2, user3] = users;

console.log(user1); 
console.log(user2); 
console.log(user3); 

// 2. 배열 구조 분해하기 2

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split('-');

console.log(user4);
console.log(user5);
console.log(user6);

// 3. 배열 구조 분해 : 기본값

// let [a,b,c] = [1,2];
let [a=3, b=4, c=5] = [1,2];

console.log(a); // 1
console.log(b); // 2
console.log(c);

// 4. 배열 구조 분해: 일부 반환값 무시

let [user7, ,user8] = ['Mike', 'Tom', 'Jane', 'Tony'];

console.log(user7);
console.log(user8);

/* 객체 구조 분해
let user = {name: 'Mike', age: 30};
// let {name, age} = user;

console.log(name);
console.log(age); 

객체 구조 분해: 새로운 변수 이름으로 할당

let {name: userName, age: userAge} = user;

console.log(userName); // 'Mike'
console.log(userAge); // 30
*/

let user = {
    name: 'Jane',
    age: 18,
    gender: 'female'
};

let {name, age, gender = 'male'} = user;

console.log(name); // 'female'