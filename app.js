const express = require('express');
const app = express();
const port = 80;
const fs = require('fs');

const index = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const acadmentor = fs.readFileSync('./acadmentor.html');
const alumniMentorship = fs.readFileSync('./alumniMentorship.html');
app.use(express.static(__dirname + '/public'));

app.get('/index', (req,res)=>{
    res.send(index);
})
app.get('/about', (req,res)=>{
    res.send(about);
})
app.get('/acadmentor', (req,res)=>{
    res.send(acadmentor);
})
app.get('/alumniMentorship', (req,res)=>{
    res.send(alumniMentorship);
})

app.listen(port,()=>{
    console.log("Server started");
})