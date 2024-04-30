function print(){
    for (let i=0; i<10; i++){
            console.log('블록 스코프: ${i}');

            console.log(i);
    }
}

print()

// 결론 let은 중괄호 안에서만 var는 함수 안에서만
// 나타낼 수 있는 변수이다.