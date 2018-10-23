import {Person} from '../../src/case2/Person';
import {Consultation} from '../../src/case2/Consultation';
import { BuilderPerson } from '../../src/case2/BuilderPerson';
import { BuilderConsultation } from '../../src/case2/BuilderConsultation';

describe("Consultation", function() {
    // This method runs before all tests
    beforeAll(() => console.log("\nConsultation test stack is starting to run"));

    // This method runs before each method
    beforeEach(() => {});

    // This method runs after each tests
    afterEach(() => {});

    // This method runs after all tests
    afterAll(() => console.log("\nConsultation test stack finished to run"));

    describe("Return consultations", () => {
        it("Must not charge for return consultations", () => {
            let consultation = new BuilderConsultation().withIsReturn(true).build();
            expect(consultation.getPrice()).toEqual(0);
        });
    });

    describe("Commom procedures", () => {
        it("Must charge in $25 the commom procedures", () => {
            let consultation = new BuilderConsultation().build();
            expect(consultation.getPrice()).toEqual(25);
        });
    
        it("Must charge the double price for private consultations", () => {
            let consultation = new BuilderConsultation()
                .withPatient(new BuilderPerson().withName("Jeanne").build())
                .withIsPrivate(true)
                .build();
            expect(consultation.getPrice()).toEqual(25 * 2);
        });
    });

    describe("Specific procedures", () => {
        it("Must charge specific values per procedure", () => {
            let consultation = new BuilderConsultation()
                .withProcedures(["procedure", "massage", "x-ray"])
                .build();
            expect(consultation.getPrice()).toEqual(25 + 33 + 55);
        });
    });
});