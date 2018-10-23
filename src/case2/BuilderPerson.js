import { Person } from "./Person";

export class BuilderPerson {
    constructor() {
        this._name = "Mary";
        this._age = 25;
        this._weight = 60;
        this._height = 1.75;
    }

    build() {
        return new Person(this._name, this._age, this._weight, this._height);
    }

    withName(name) {
        this._name = name;
        return this;
    }

    withAge(age) {
        this._age = age;
        return this;
    }

    withWeight(weight) {
        this._weight = weight;
        return this;
    }

    witHeight(height) {
        this._height = height;
        return this;
    }
}