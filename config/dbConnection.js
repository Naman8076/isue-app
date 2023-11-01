// const mongoose = require("mongoose")

// // Making Connecting with mongoDB
// const connectDb = async ()=>{
//     try{
//              const connect = await mongoose.connect("mongodb+srv://namansinghal2110:naDxWRJM3vQN8jBP@cluster0.nlackvx.mongodb.net/?retryWrites=true&w=majority")
//         console.log("Database Connected: ", connect.connection.name)
        
//         // 8OujhVzpj5eMx2sY
//         // naDxWRJM3vQN8jBP
//     }
//     catch(err){
//         console.log(err)
//         process.exit(1)
//     }
// }
// // Exporting the function 
// module.exports = connectDb;
// naDxWRJM3vQN8jBP

// const mongoose = require('mongoose');

// // Function to connect to MongoDB
// const connectDb = async () => {
//     try {
//         const connectionOptions = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             // useFindAndModify: false, // Disable findAndModify
//             // useCreateIndex: true, // Enable createIndex
//         };

//         const connection = await mongoose.connect(
//             'mongodb+srv://namansinghal2110:naDxWRJM3vQN8jBP@cluster0.nlackvx.mongodb.net/?retryWrites=true&w=majority', // Replace with your MongoDB URI
//             connectionOptions
//         );

//         console.log('Database Connected:', connection.connection.name);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1); // Terminate the Node.js application on connection failure
//     }
// };

// // Export the function
// module.exports = connectDb;
const mongoose = require('mongoose');

const DB = 'mongodb+srv://namansinghal2110:naDxWRJM3vQN8jBP@cluster0.nlackvx.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;