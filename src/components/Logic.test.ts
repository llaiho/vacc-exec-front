import React from 'react';
import { HealthCareDistrict, Vaccine, Order } from "../interfaces/Order";
import { Gender, Vaccination } from "../interfaces/Vaccination";
import { ProsessedPerVaccine, ProsessedByDistrict, ArrivedUsedExpired } from "../interfaces/Prosessed";
import { selectedDateFrom, selectedDateTo, selectedDateFromMS, selectedDateToMS } from "./Pickers";
import { dateConverter, isThisEntryWithingTimeframe, buildOrderTable } from './Logic';
import { testTable1, testTable2, testTable3 } from '../testdata';


 
describe("Test suite", () => {

    it("Test date converter to milliseconds", () => {
    //    let d = (dateConverter("2021-01-27T16:02:09.642922Z"));
        var date = testTable1[0].arrived;
        expect(Date.parse(date)).toBe(1611763329642);
    })


    it("Test: date in milliseconds to readable date", () => {
        var date = new Date(1611763329642);
        expect(date.toISOString()).toBe("2021-01-27T16:02:09.642Z")
    })

    it("Test date converter, get day", () => {
            var date1 = new Date();           
            var date = testTable1[0].arrived;
            date1.setTime(Date.parse(date))
            expect(date1.getDate()).toBe(27);
    })    

    it("Test date converter, get month", () => {
        var date1 = new Date();           
        var date = testTable1[0].arrived;
        date1.setTime(Date.parse(date))
        expect(date1.getMonth()).toBe(0);       // month is 0 based
}) 



    it("injection amount test Antiqua", () => {
        expect(testTable1[0].injections).toBe(4);
        console.log(testTable1[0].injections);
    })

    it("injection amount test Zerpfy", () => {
        expect(testTable1[1].injections).toBe(5);
    })

    it("injection amount test SolarBuddhica", () => {
        expect(testTable1[2].injections).toBe(6);
    })


    it("time", () => {
        var date     = "2021-01-11T08:59:28.642790Z"
        console.log(Date.parse("2021-01-11T08:59:28.642790Z"))
    //    console.log(Date(1611763329642).toString);
        var dateFrom = 1610355568642
        var dateTo   = 1610355568642
        expect(isThisEntryWithingTimeframe(date, dateFrom, dateTo)).toBe(true);
    })







 
    it("build table test 1", () => {
        var orders: Order[];
        orders = buildOrderTable([testTable1, testTable2, testTable3], 1610355568642, 1710355568642)

        expect(orders.length).toBe(9);
    })

    it("build table test 2", () => {
        var orders: Order[];
        orders = buildOrderTable([testTable1, testTable2, testTable3], 1610355568642, Date.parse("2021-03-29T16:02:09.642922Z"))
//        console.log(orders);

        expect(orders.length).toBe(9);
    })    

    it("build table test 3", () => {
        var orders: Order[];
        orders = buildOrderTable([testTable1, testTable2, testTable3], 1610355568642, Date.parse("2021-02-20T16:02:09.642922Z"))
        console.log(orders);

        expect(orders.length).toBe(7);
    })
    
})










