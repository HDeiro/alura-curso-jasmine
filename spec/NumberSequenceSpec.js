import {NumberSequence} from '../src/NumberSequence';

describe("NumberSequence.js", () => {
    it("Must work with random numbers and", () => {
        let sequence = new NumberSequence(5,2,3,9,123);
        expect(sequence.getMax()).toEqual(123);
        expect(sequence.getMin()).toEqual(2);
    });

    it("Must work with sequential crescent numbers", () => {
        let sequence = new NumberSequence(1,2,3,4,5);
        expect(sequence.getMax()).toEqual(5);
        expect(sequence.getMin()).toEqual(1);
    })

    it("Must work with sequential decrescent numbers", () => {
        let sequence = new NumberSequence(5,4,3,2,1);
        expect(sequence.getMax()).toEqual(5);
        expect(sequence.getMin()).toEqual(1);
    })
})