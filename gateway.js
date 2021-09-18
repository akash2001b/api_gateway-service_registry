const express=require('express');
const routes=require('./routes/index')
PORT=3000;
const app=express();


app.use(express.json());
app.use('/',routes);

app.listen(PORT,()=>{
    console.log('gateway has started at port'+PORT);
})