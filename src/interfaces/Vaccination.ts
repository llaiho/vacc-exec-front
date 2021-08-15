



export enum Gender {
    "male" = "male",
    "female" = "female",
    "nonbinary" = "nonbinary"
}



export interface Vaccination {
    vaccination_id: string,
    sourceBottle: string,
    gender: Gender,
    vaccinationDate: Date
}








