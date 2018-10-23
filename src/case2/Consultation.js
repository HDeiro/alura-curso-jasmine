export class Consultation {
    constructor(patient, procedures, isPrivate, isReturn) {
        this._patient = patient;
        this._procedures = procedures;
        this._isPrivate = isPrivate;
        this._isReturn = isReturn;
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
}