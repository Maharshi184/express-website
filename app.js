const express = require('express')
const app = express()

app.use(express.static( 'public'));


app.listen(3000,(req,res)=>{
    console.log("connection is done")
  })

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
})

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/views/services.html');
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/views/about.html');
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/views/contact.html');
})

app.get('/cake',(req,res)=>{
    res.send('cake');
})

app.get('/cake/vadodara',(req,res)=>{
    res.send('samavale cake khaaaye');
})

app.get('/cake/amdavad',(req,res)=>{
    res.send('cakeee in ahemdabad');
})

app.get('/cake/surat',(req,res)=>{
    res.send('services available in surat');
})

app.get('*',(req,res)=>{
    res.send('vapis chala ja ');
})



