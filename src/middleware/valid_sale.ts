import { Sale } from "../model/Tsales";
import config from "../config/utils";
const { codes, messages, ServerResponse } = config;

export const validSale = (req: any, res: any, next: Function) => {
  const sale: Sale = req.body;
  const { creditcard, creditcardNo, client, email, order, totalPay } = sale;

  if (
    !creditcard ||
    !creditcardNo ||
    !client ||
    !email ||
    order.length <= 0 ||
    totalPay < 100
  )
    return ServerResponse.response(
      messages.badReq,
      res,
      codes.badReq,
      null,
      true
    );
    else next();
};
