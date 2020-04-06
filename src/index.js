const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const route=require('./routes');

app.use(express.static("public"));
app.use(bodyParser.json());

const PORT=process.env.PORT || 3000;

const uri=process.env.MONGODB_URI || "mongodb+srv://sayantan:lolnotmypassword:(@cluster0-ve4hp.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
	.catch((err)=>console.log(err));
mongoose.connection.once('open',()=>console.log('successfully connected to db'));

app.use('/book',route);

app.all('*',(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});

app.listen(PORT,()=>console.log(`App listening on port ${PORT}`));
