function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;

}

const user1 = new User('Mike',30, 'html', "css");
const user2 = new User('Mike',30, 'html', "css");
const user3 = new User('Mike',30, 'html', "css");

console.log(user1);
console.log(user2);
console.log(user3);