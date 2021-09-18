const express=require('express');
// const axios=require('axios');

const app=express();
const PORT=3001;

app.use(express.json());
app.get('/fakeapi',(req,res,next)=>{
    res.send('hello from fake server');
});
app.post('/bogusapi',(req,res,next)=>{
    res.send('bogus api server');
});

app.get('/registrytest',(req,res,next)=>{
    res.send('registrytest api');
})

app.listen(PORT,()=>{
    console.log('fake server started on port '+PORT);
})