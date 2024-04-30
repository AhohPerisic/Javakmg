// 매소드 오버라이링
// constructor 추가

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop();
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");

console.log(z4());