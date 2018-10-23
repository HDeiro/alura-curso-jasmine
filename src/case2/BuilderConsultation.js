import { BuilderPerson } from "./BuilderPerson";
import { Consultation } from "./Consultation";

export class BuilderConsultation {
    constructor() {
        this._patient = new BuilderPerson().build();
        this._procedures = ["commom procedure"];
        this._isPrivate = false;
        this._isReturn = false;
    }

    build() {
        return new Consultation(this._patient, this._procedures, this._isPrivate, this._isReturn);
    }

    withPatient(patient) {
        this._patient = patient;
        return this;
    }

    withProcedures(procedures) {
        this._procedures = procedures;
        return this;
    }

    withIsPrivate(isPrivate) {
        this._isPrivate = isPrivate;
        return this;
    }

    withIsReturn(isReturn) {
        this._isReturn = isReturn;
        return this;
    }
}