import { HealthCareDistrict, Vaccine, Order } from "../interfaces/Order";

export function dateConverter(date: string) {
  const newDate = Date.parse(date);
  return newDate;
}

/* 
export function dateConverterToReadableDate(date: Number) {
    date = Date().toString();
    
    return newDate;
}
 */
/* 
export function isThisEntryWithingTimeframe(date: string, startDate: string, stopDate: string) {
    if ((Date.parse(date) > Date.parse(startDate)) && (Date.parse(date) < Date.parse(stopDate))) {
        return true;
    }
    else {
        return false;
    }
}
 */

export function isThisEntryWithingTimeframe(
  date: string,
  startDate: number,
  stopDate: number
) {
  if (Date.parse(date) >= startDate && Date.parse(date) <= stopDate) {
    return true;
  } else {
    return false;
  }
}

export function buildOrderTable(
  orders: Order[][],
  dateFrom: number,
  dateTo: number
) {
  var completeTable: Order[] = new Array();
  //    var dateFromISO = new Date();
  //    dateFromISO = new selectedDateFrom();
  //    var dateFrom = selectedDateFrom.getTime
  for (let j = 0; j < orders.length; j++) {
    for (let i = 0; i < orders[j].length; i++) {
      if (isThisEntryWithingTimeframe(orders[j][i].arrived, dateFrom, dateTo)) {
        completeTable[orders[j][i].orderNumber - 1] = orders[j][i];
      }
    }
  }
  //    console.log(completeTable);
  return completeTable;
}
