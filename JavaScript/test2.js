class Car {
    constructor(gasoline, number) {
        this.gasoline = gasoline;
        this.number = number;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.number}です。`);
    }
}
const myCar = new Car('レギュラー', '1234');
myCar.getNumGas();
