const express=require('express');
const app=express();

express.static("public");
const PORT=process.env.PORT || 8080;

app.all('*',(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});

app.listen(PORT,()=>console.log(`App listening on port ${PORT}`));
