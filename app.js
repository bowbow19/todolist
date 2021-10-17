const express = require('express')
const port = 3000
const app = express()

app.get('/' , (req,res) =>{
res.send(`slkdjlskdgdfjgkfjs`)

})

app.listen(port , () =>{
    console.log(`Express is listening to localhost:${port}`);
})