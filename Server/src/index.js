var express = require('express');

const port  = process.env.PORT || 1337;
var app = express();

app.listen(port , ()=>{

    console.log(`listening at http://localhost:${port}`); 
    
});