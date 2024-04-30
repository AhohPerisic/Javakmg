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

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, "singer");
console.log(mike);

update.call(tom, 2002, "teacher");
console.log(tom);

