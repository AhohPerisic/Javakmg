const User = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);


for(const p in mike){
    console.log(p);
}

for(const p in tom){
    console.log(p);
}