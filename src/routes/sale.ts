import express from "express";
import config from "../config/utils";
import db from "../db/db_transactions";
import model from "../model/sale";
import { validSale } from "../middleware/valid_sale";
import { validAdmin } from "../middleware/validadmin";
const { routes_name, SaleModel } = { ...config, ...model };
const route = express.Router();

route
  .route(routes_name.sale)
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .post(validSale, (req, res) => {
    db.create(SaleModel, req.body, res);
  })
  .get(validAdmin, (req, res) => db.read(SaleModel, res));
export const route_sale = route;
