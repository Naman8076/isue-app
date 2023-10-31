const mongoose = require("mongoose")

// Making Connecting with mongoDB
const connectDb = async ()=>{
    try{
             const connect = await mongoose.connect("mongodb+srv://namansinghal2110:naDxWRJM3vQN8jBP@cluster0.nlackvx.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database Connected: ", connect.connection.name)
        
        // 8OujhVzpj5eMx2sY
        // naDxWRJM3vQN8jBP
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
// Exporting the function 
module.exports = connectDb;
// naDxWRJM3vQN8jBP