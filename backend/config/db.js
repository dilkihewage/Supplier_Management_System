const mongoose = require("mongoose");

const dburl ="mongodb+srv://Chathula:chatula2002@inventory.mbjab.mongodb.net/?retryWrites=true&w=majority&appName=Inventory";


mongoose.set("strictQuery", true,"useUrlParser", true);

const connection =async () =>{
    try{
    await mongoose.connect(dburl);
    console.log("MongoDB connected~");
}catch (e){
    console.error(e.message);
    process.exit();

}
};

module.exports = connection;