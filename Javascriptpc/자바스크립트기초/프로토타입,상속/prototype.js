const car = {
    wheels: 4,
    dirve() {
        console.log("drive..");
    },
};

const Bmw = function (color) {
    this.color = color;
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

x5.__proto__ = car;
z4.__proto__ = car;

console.log(x5);
console.log(x5.wheels);
