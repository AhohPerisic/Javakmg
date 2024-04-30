// 텍스트 포함 문자 확인하기

let desc = "Hi guys. Nice to meet you.";

console.log(desc.indexOf('to'));

console.log(desc.indexOf('man'));

if(desc.indexOf('Hi') > -1){
    console.log('Hi가 포함된 문장입니다.');
}