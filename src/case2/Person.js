export class Person {
    constructor(name, age, weight, height) {
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._height = height;
        this._heartbeat = 80;
    }

    getHeartbeatsInLife() {
        return this._age * 365 * 24 * 60 * this._heartbeat;
    }

    getIMC() {
        return this._weight / (this._height ** 2);
    }
}