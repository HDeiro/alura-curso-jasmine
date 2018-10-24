import { BuilderPerson } from '../../src/case2/BuilderPerson';
import { BuilderConsultation } from '../../src/case2/BuilderConsultation';
import { Scheduler } from '../../src/case2/Scheduler';

describe("Appointment", () => {
    let scheduler;

    beforeEach(() => {
        scheduler = new Scheduler();
    });

    it("Must schedule an appointment of a consultation twenty days later", () => {
        let consultation = new BuilderConsultation()
            .withDate(new Date(2018, 7, 1))
            .build();
        let newConsultation = scheduler.schedule(consultation);

        expect(newConsultation.getDate().toString())
            .toEqual(new Date(2018, 7, 21).toString());
    });

    it("Must skip weekends", () => {
        let consultation = new BuilderConsultation()
            .withDate(new Date(2018, 7, 1))
            .build();
    });
});