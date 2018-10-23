export class NumberSequence {
    constructor(...numbers) {
        this.numbers = numbers;
        this.min = Number.MAX_VALUE;
        this.max = Number.MIN_VALUE;
        this._findMinAndMax();
    }
    
    _findMinAndMax() {
        this.numbers.forEach(element => {
            if(element > this.max) this.max = element;
            if(element < this.min) this.min = element;
        });
    }

    getMin() {
        return this.min;
    }

    getMax() {
        return this.max;
    }
}