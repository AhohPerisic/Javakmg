const pr = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        resolve('OK') // or reject(new Error("err...."));
    }, 3000)
});

pr.then(
    function(result){
        console.log(result + ' 가지러 가자.');
    },
    function(err){
        console.log('다시 주문해주세요..');
    }
);

// 이렇게도 바꿀수 있음

/* 
pr.then(
        function(result){}
).catch(
    function(err){}
).finally(
        function(){
            console.log('--- 주문 끝 ---')
        }
    )
*/