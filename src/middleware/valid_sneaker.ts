import config from "../config/utils";
const { codes, messages, ServerResponse } = config;
import { Sneaker } from "../model/Tsneaker";

export const validSneaker = (req: any, res: any, next: Function) => {
  const sneaker: Sneaker = req.body;
  const { price, brand, model, image, sizes } = sneaker;

  if (!price || !brand || !model || !image || sizes.length <= 0)
    ServerResponse.response(
      messages.badReq,
      res,
      codes.badReq,
      { price, brand, model, image },
      true
    );
  else next();
};
