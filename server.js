import express  from "express";
import dotenv from 'dotenv';
import connectDb from "./database/db.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//app.use("/api/v1", routerUtilisateurs);


app.listen(3000,(err) => {
    if (err){
        console.log(err);
    }
    console.log("server is running on " + process.env.PORT);
})
 
dotenv.config({path: './config/.env'})
connectDb();


app.use(('/'),router);
