import  app  from "../src/server";
import http from 'http';
import config from "../src/config/utils";
const {env}=config;




const server=http.createServer(/*{cert:env.PEM,key:env.KEY_PEM}*/app)

server.on("error",(err)=>{
console.log(err);

});

server.listen(env.PORT,()=>{
    console.log(`Litenning server from port  ${env.PORT}`);
    
})