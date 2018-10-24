export class Consultation {
    constructor(patient, procedures, isPrivate, isReturn, date) {
        this.setPatient(patient);
        this.setProcedures(procedures);
        this.setIsPrivate(isPrivate);
        this.setIsReturn(isReturn);
        this.setDate(date);
    }

    getPrice() {
        if(this._isReturn)
            return 0;

        let finalPrice = 0;

        this._procedures.forEach(procedure => {
            if(procedure == "x-ray")
                finalPrice += 55;
            else if(procedure == "massage")
                finalPrice += 33;
            else
                finalPrice += 25;
        });

        if(this._isPrivate) 
            finalPrice *= 2;

        return finalPrice;
    }

    getPatient() {
        return this._patient;
    }

    setPatient(patient) {
        this._patient = patient;
    }

    getProcedures() {
        return this._procedures;
    }

    setProcedures(procedures) {
        this._procedures = procedures;
    }

    getIsPrivate() {
        return this._isPrivate;
    }

    setIsPrivate(isPrivate) {
        this._isPrivate = isPrivate;
    }

    getIsReturn() {
        return this._isReturn;
    }

    setIsReturn(isReturn) {
        this._isReturn = isReturn;
    }

    getDate() {
        return this._date;
    }

    setDate(date) {
        this._date = date;
    }
}