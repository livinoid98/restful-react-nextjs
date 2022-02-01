const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true,
}));

app.get('/', (req,res) => {
    res.set({'access-control-allow-origin': '*'});
    const data = fs.readFileSync('./db/content.json', {encoding: 'utf-8'});
    res.send(data);
});
 
app.listen(8000, (req,res) => {
    console.log('server start on 8000 port');
})
