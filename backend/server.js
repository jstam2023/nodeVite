

import express from 'express'
import cors from 'cors'

const app = express();
// const PORT = 5050;
//we can delete it and move it to .env file as a variable
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())

app.get("/api/message", (req, res)=> {
    res.status(200).json({message: "Hello from the backend!"})
})

app.post("/api/message", (req, res)=> {
    const name = req.body.name;
    //Alternatively we destructure the name which we get from the body we send from the frontend
    // const {name} = req.body
    res.status(200).json({message: `Hello, ${name}, the data was received`})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port:${PORT}`)
})
