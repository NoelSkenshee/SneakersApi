
const ServerResponse = {
  response: (
    message: string,
    res: any,
    code: number,
    data: any,
    error: boolean
  ) => {
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json");
    res.json({ error, message, data });
  },
};

const codes = {
  badReq: 400,
  create: 201,
  server: 500,
  success: 200,
  notaut: 401,
};
     
const routes_name = {
  sale: "/sale",
  sneaker:"/sneaker"
}; 
const tablesName={
  Sneakers:"Sneakers",
  Sales:"Sales"
}


const SortRulDB={
  date:{"createdAt":"descending"}
}

const limitDB=10;




const messages = {
  badReq: "Fields missing",
  create: "Created succesfully",
  notaut: "You are not autorized",
  fileError:"Wrong format file, is not an image"
};
const publicFolder="/../public";
const fileDestination="public/images";
const env = process.env;
const dbhost=/**/env.MONGODB_REMOTE//

export default {
  codes,
  routes_name,
  env,
  messages,
  ServerResponse,
  fileDestination,
  dbhost,
  tablesName,
  SortRulDB,
  publicFolder,
  limitDB
};
