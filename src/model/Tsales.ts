import { Order } from "./Torder";
export type Sale = {
  creditcard: String;
  creditcardNo: String;
  client: String;
  email: String;
  totalPay: Number;
  order: Order[];
};
