const express=require('express');
const routes=require('./routes/index')
const helmet=require('helmet');
const app=express();
PORT=3000;


app.use(express.json());
app.use('/',routes);

app.listen(PORT,()=>{
    console.log('gateway has started at port'+PORT);
})