import { HealthCareDistrict, Vaccine, Order } from "./Order";

export interface Usage extends Order {
  shotsLeftInBottle: Number;
  expired?: boolean;
  daysLeftToUse?: Date;
}

export interface ProsessedPerVaccine {
  vaccine: Vaccine;
  day: Date;
  arrived: Map<HealthCareDistrict, Number>;
  usage: Map<HealthCareDistrict, Number>;
  expired: Map<HealthCareDistrict, Number>;
}

export interface ProsessedByDistrict {
  district: HealthCareDistrict;
  day: Date;
  vaccine: Map<Vaccine, ArrivedUsedExpired>;
}

export interface ArrivedUsedExpired {
  arrived: Number; // bottle
  used: Number; // dose
  expired: Number; // dose
}
