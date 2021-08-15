

export enum HealthCareDistrict {
    "HYKS" = "HYKS",
    "KYS" = "KYS",
    "OYS" = "OYS",
    "TAYS" = "TAYS",
    "TYKS" = "TYKS"
}

export enum Vaccine {
    "Zerpfy" = "Zerpfy",
    "Antiqua" = "Antiqua",
    "SolarBuddhica" = "SolarBuddhica"
}

 
export enum AmountOfDosePerBottle {
    "Antiqua" = 4,
    "Zerpfy"  = 5,
    "SolarBuddhica" = 6
}

export const ExpiresIn = 30;
 

export function getDoseAmountPerBottle(vaccine: Vaccine) {
    if (vaccine === Vaccine.Antiqua) {
        return 4;
    }
    if (vaccine === Vaccine.Zerpfy) {
        return 5;
    }
    if (vaccine === Vaccine.SolarBuddhica) {
        return 6;
    }
}

export function getExpiration() {
    return 30;
}


export interface Order {
    order_id: string,
    orderNumber: number,
    responsiblePerson: string,
    healthCareDistrict: HealthCareDistrict,
    vaccine: Vaccine,
    injections: number,
    arrived: string
}