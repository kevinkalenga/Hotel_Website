import express from "express";
import mongoose from "mongoose"
import { readdirSync } from "fs";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();



const port = process.env.PORT || 8000;

const app = express();

mongoose
    .connect(process.env.MONGO).then(() => {
        console.log('MongoDb is connected')
    }).catch((err) => {
        console.log(err)
    })

// "start": "nodemon -r esm server.js"

// middlecares
app.use(cors())
app.use(morgan("dev"))
// route middleware 
// readdirSync("./routes").map((r) => app.use('/api', require(`./routes/${r}`)))
readdirSync("./routes").map(async (r) => {
    const route = await import(`./routes/${r}`);
    app.use("/api", route.default);
});


app.listen(port, () => console.log(`Server is running on port ${port}`))