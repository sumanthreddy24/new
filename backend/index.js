// import express from "express";

// const app =express()





// import cors from 'cors'




// import cookieParser from "cookie-parser";
// // 



// // importing routes

// import authRoute from './routes/auth.js'

// import userRoute from './routes/users.js'

// import productRoute from "./routes/products.js"




// app.use((req,res,next) =>{

//     res.header("Access-Control-Allow-Credentials",true)

//     next()

// })




// app.use(express.json())




// app.use(cors({

//     origin:"http://localhost:3000",

// }))

// app.use(cookieParser())





// app.use("/api/auth",authRoute)

// app.use("/api/users",userRoute)

// app.use("/api/products",productRoute)





// app.listen(8800,(req,res)=>{

//     console.log('hello server .....................')

// })
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

// importing routes
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import productRoute from "./routes/products.js";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(cookieParser());

// Mock stock data for demonstration purposes
const stockData = [];

// Route for stock entry
app.post("/api/stockentry", (req, res) => {
    const arrivedDate = req.body.date;

    // Check if stock data already exists for the provided date
    const existingStock = stockData.find((stock) => stock.arrivedDate === arrivedDate);

    if (existingStock) {
        // Date already present in the stock data
        return res.status(400).json({ error: 'Stock data already present for this date!' });
    }

    // If date does not exist in the stock data, you can add it to the stockData array or perform database operations here
    // For demonstration purposes, let's add it to the stockData array
    stockData.push({ arrivedDate, /* other stock data properties */ });

    // Send a success response
    res.status(201).json({ success: true, message: 'Stock data added successfully!' });
});

// Routes for authentication, users, and products
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(8800, () => {
    console.log('Server is running on port 8800...');
});
