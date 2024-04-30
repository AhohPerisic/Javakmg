//extends
// 매소드 오버라이딩

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
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop();
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");

console.log(z4.stop());