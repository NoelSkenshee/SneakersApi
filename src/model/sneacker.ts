import mongoose from "mongoose";
const Schema = mongoose.Schema;
import config from "../config/utils";
const { Sneakers } = config.tablesName;
const SneakerSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String],
      requires: true,
    },
  },
  { timestamps: true }
);

export default {
  sneakerModel: mongoose.model(Sneakers, SneakerSchema),
};
