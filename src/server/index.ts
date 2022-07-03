import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import path from "path"
import corse from "cors";
import { route_sale } from "../routes/sale";
import { route_sneaker } from "../routes/sneaker";
import config from "../config/utils";
const { public_routes,publicFolder} = { ...config };




const app = express();


app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("*",(req,res,next)=>{
console.log("/"+(req.url.split("/")[1]));

  if(public_routes["/"+(req.url.split("/")[1])||req.url]) res.redirect("/")
  else next()
  
})

app.use(corse());
app.use(express.static(path.join(__dirname+publicFolder)))
app.use(route_sale);
app.use(route_sneaker);

export = app;
