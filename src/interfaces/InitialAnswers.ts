export interface AnswerOrder {
  order_id: string;
  orderNumber: number;
  responsiblePerson: string;
  healthCareDistrict: string;
  vaccine: string;
  injections: number;
  arrived: string;
  usedOnDays: string[];
}
