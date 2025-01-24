const express = require("express");
const dbConnection = require("./config/db");
const routes = require("./routes/supplier");
const authRoutes = require("./routes/authRoutes");
const order = require("./routes/order");
const supplierOrder = require("./routes/supplierOrder");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors({ origin: true, credentials:true}));

dbConnection();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>res.send("Heloo server is running"));
app.use("/api/supplier", routes);
app.use("/api/authRoutes", authRoutes);
app.use("/api/order", order);
app.use("/api/supplierOrder", supplierOrder);


const PORT  = 5000;

app.listen(PORT,()=>console.log('server is running on PORT ${PORT}'));