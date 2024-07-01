const express = require("express")
const PORT = 5500
const app  = express();

app.get('/',(req,res)=>{
    return res.send("Welcome to express js in Docker");
});

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})