// call, apply, bind: 함수 호출 방식과 관계없이 this 를 지정할 수 있음.
const mike = {
    name: "Mike"
};

const tom = {
    name: "Tom"
};

function showThisName() {
    console.log(this.name);
}



showThisName();
showThisName.call(mike);