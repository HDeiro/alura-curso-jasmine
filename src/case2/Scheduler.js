import { BuilderConsultation } from "./BuilderConsultation";

export class Scheduler {
    constructor(consultation) {
        this._consultation = consultation;
    }

    schedule(consultation) {
        let daysInMilliseconds = 1000 * 60 * 60 * 24 * 20;
        let date = new Date(consultation.getDate().getTime() + daysInMilliseconds);

        return new BuilderConsultation()
            .withDate(date)
            .withIsPrivate(consultation.getIsPrivate())
            .withIsReturn(consultation.getIsReturn())
            .withPatient(consultation.getPatient())
            .withProcedures(consultation.getProcedures())
        .build();
    }
}