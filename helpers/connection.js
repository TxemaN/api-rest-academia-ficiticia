const mongoose=require("mongoose");

const dbConnect=async()=>{

    try{
        
       const resp = await mongoose.connect(process.env.URI_DB);
       console.log("conectando a la base");
       return resp
    
}catch(error){
   return{
    ok:false,
    msg:"Error al conectar"
   }}

}

module.exports={dbConnect}