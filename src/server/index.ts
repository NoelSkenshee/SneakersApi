import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import path from "path"
import corse from "cors";
import { route_sale } from "../routes/sale";
import { route_sneaker } from "../routes/sneaker";
import config from "../config/utils";
const { routes_name,publicFolder} = { ...config };
const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(corse());

app.use(express.static(path.join(__dirname+publicFolder)))
console.log(path.join(__dirname+publicFolder));

/*
app.use(route_sale);
app.use(route_sneaker);*/

export = app;
