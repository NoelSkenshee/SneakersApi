import express from "express";
import db from "../db/db_transactions";
import model from "../model/sneacker";
import config from "../config/utils";
import { validSneaker } from "../middleware/valid_sneaker";
import { validAdmin } from "../middleware/validadmin";
const {
  routes_name,
  sneakerModel,
  SortRulDB,
  limitDB,
  codes,
  ServerResponse,
  messages,
} = {
  ...config,
  ...model,
};

const route = express.Router();
route
  .route(routes_name.sneakerId) .get((req, res) => db.readById(sneakerModel, res, req.params.id));

route
  .route(routes_name.sneaker)
  .post(validAdmin, validSneaker, (req, res) =>
    db.create(sneakerModel, req.body, res)
  )
  .get((_, res) => db.read(sneakerModel, res, SortRulDB.date, limitDB))
  .put(validAdmin, validSneaker, (req, res) =>
    db.update(sneakerModel, req.body, res)
  );

export const route_sneaker = route;