const express=require("express");

require(`dotenv`).config();
const {dbConnect}=require(`./helpers/connection`);

const app=express();
const port=process.env.PORT;

//carpeta pública//
app.use(express.static(__dirname+"/public"))

//establecer plantillas//
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")


dbConnect();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//express validator


  //capturar desde routes//
app.use("/api/v1",require("./routes/apiRoute"));

app.listen(port, ()=>{
    console.log('servidor por el puerto' , port)
  })
