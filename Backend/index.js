import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js"
import contactRoute from "./route/contact.route.js"
const app = express();
app.use(cors(
    {
        origin: ["https://book-store-frontend-one-sigma.vercel.app"],
        methods: ["POST","GET"],
        credentials: true
    }
));
app.use(express.json())

dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB")
} catch (error) {
    console.log("Error",error)
}

app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/api",contactRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
