

const Bmw = function (color) {
    this.color = color;
}

/* sol1. 
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function() {
    console.log("drive...");
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");
*/

/* sol 2
Bmw.prototype = {
    constructor: Bmw;
    wheels: 4,
    drive() {
        console.log("drive...");
    },
    navigation: 1,
    stop() {
        console.log("STOP!";)
    },
}; */
