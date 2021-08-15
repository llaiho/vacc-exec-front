import React from 'react';
import { HealthCareDistrict, Vaccine, Order, AmountOfDosePerBottle, getDoseAmountPerBottle } from "./interfaces/Order";
import { Gender, Vaccination } from "./interfaces/Vaccination";
import { ProsessedPerVaccine, ProsessedByDistrict, ArrivedUsedExpired } from "./interfaces/Prosessed";
import { selectedDateFrom, selectedDateTo, selectedDateFromMS, selectedDateToMS } from "./components/Pickers";
import { dateConverter } from './components/Logic';



export const testTable1: Order[] = [
    {
        order_id: 'some_string1',
        orderNumber: 1,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.Antiqua,
        injections: AmountOfDosePerBottle.Antiqua,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-01-27T16:02:09.642922Z"
    },
    {
        order_id: 'some_string1',
        orderNumber: 3,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.Zerpfy,
        injections: AmountOfDosePerBottle.Zerpfy,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-02-27T16:02:09.642922Z"
    },
    {
        order_id: 'some_string1',
        orderNumber: 5,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.SolarBuddhica,
        injections: AmountOfDosePerBottle.SolarBuddhica,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-03-27T16:02:09.642922Z"
    }
];


export const testTable2: Order[] = [
    {
        order_id: 'some_string1',
        orderNumber: 2,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.Antiqua,
        injections: AmountOfDosePerBottle.Antiqua,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-01-29T16:02:09.642922Z"
    },
    {
        order_id: 'some_string1',
        orderNumber: 6,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.KYS,
        vaccine: Vaccine.Zerpfy,
        injections: AmountOfDosePerBottle.Zerpfy,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-02-29T16:02:09.642922Z"
    },
    {
        order_id: 'some_string1',
        orderNumber: 8,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.SolarBuddhica,
        injections: AmountOfDosePerBottle.SolarBuddhica,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-03-29T16:02:09.642922Z"
    }
];

export const testTable3: Order[] = [
    {
        order_id: 'some_string1',
        orderNumber: 4,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.Antiqua,
        injections: AmountOfDosePerBottle.Antiqua,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-01-20T16:02:09.642922Z"
    },
    {
        order_id: 'some_string1',
        orderNumber: 7,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.Zerpfy,
        injections: AmountOfDosePerBottle.Zerpfy,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-02-20T16:02:09.642922Z"
    },
    {
        order_id: 'some_string1',
        orderNumber: 9,
        responsiblePerson: 'whatever',
        healthCareDistrict: HealthCareDistrict.HYKS,
        vaccine: Vaccine.SolarBuddhica,
        injections: AmountOfDosePerBottle.SolarBuddhica,
     //   arrived: Date(Date.parse("2021-01-27"))
        arrived: "2021-03-20T16:02:09.642922Z"
    }
];















