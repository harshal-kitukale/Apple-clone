const mongoose=require("mongoose");
process("dotenv").require()
const connection=mongoose.connect();



module.exports={connection}