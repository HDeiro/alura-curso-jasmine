import {Person} from '../../src/case2/Person';
import {Consultation} from '../../src/case2/Consultation';

describe("Consultation", function() {
    let mary = new Person("Mary", 25, 60, 1.75);

    it("Must not charge for return consultations", () => {
        let consultation = new Consultation(mary, ["x-ray"], false, true);
        expect(consultation.getPrice()).toEqual(0);
    });

    it("Must charge in $25 the commom procedures", () => {
        let consultation = new Consultation(mary, ["procedure"], false, false);
        expect(consultation.getPrice()).toEqual(25);
    });

    it("Must charge the double price for private consultations", () => {
        let consultation = new Consultation(mary, ["procedure"], true, false);
        expect(consultation.getPrice()).toEqual(50);
    });

    it("Must charge specific values per procedure", () => {
        let consultation = new Consultation(mary, ["procedure", "massage", "x-ray"], false, false);
        expect(consultation.getPrice()).toEqual(25 + 33 + 55);
    })
});