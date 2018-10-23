import {Person} from '../../src/case2/Person';

describe("Person", function() {
    it("Must calculate IMC", () => {
        let mary = new Person("Mary", 25, 60, 1.75);
        expect(mary.getIMC()).toEqual((60 / (1.75 ** 2)));
    });
})