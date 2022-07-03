import mongoose from "mongoose";
import { Schema } from "mongoose";
import config from "../config/utils";
const { Sales } = config.tablesName;
const Order = new Schema({
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
});

const SaleSchema = new Schema(
  {
    creditcard: {
      type: String,
      required: true,
    },
    creditcardNo: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:false
    },
    totalPay: {
      type: Number,
      required: true,
      min: 100,
    },
    order: {
      type: [Order],
      min: 1,
    },
  },
  { timestamps: true }
);

export default {
  SaleModel: mongoose.model(Sales, SaleSchema),
};
