// 금칙어로 콜라가 있는지 판단하기

function hascola(str) {
    if (str.indexOf("콜라") > -1) { // > -1 안쓰고 include를 써도 됨. 
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hascola("콜라 먹을래");
hascola("나는 사이다");
