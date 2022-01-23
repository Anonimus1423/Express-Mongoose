// Import express
import express from "express"

// Import mongoose
import mongoose from "mongoose"

// Import path
import path, { normalize } from "path"

// Import routers
import router from "./routes/route.js"

//
// Init express
const app = express();

// Get this path name
const dirname = path.resolve();

// Set Port
const PORT = process.env.PORT || 3000;

//
// Init ejs
app.set("view engine", "ejs")
app.set("views", "templates")

//
// Normalize json for get-post requests
app.use(express.urlencoded({extended: true}))

// Add static folder
app.use(express.static(path.resolve(dirname, "static")))

// Add router
app.use(router)

//
async function start()
{
    // Connecting mongo db
    await mongoose.connect("mongodb://localhost/NodeJsChat")

    // Starting server
    app.listen(PORT, () => { console.log("Server has been started") })
}
start()