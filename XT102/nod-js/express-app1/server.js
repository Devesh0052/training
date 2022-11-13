const express = require('express');

const PORT = 5000;
const app = express();
app.use(express.json());

app.get('/greet', (req, res) => { // GET http://localhost:5000/greet


    let qs=req.query.city;

    console.log(qs);
    if(qs===undefined){
        res.send("<h1>Please provide city info as ?city=city name</h1>");
    }else{
    res.send("<h1>Welcome to Express Server "+qs+"</h1>");
}

});

app.get('/greet/:user', (req, res) => { // GET http://localhost:5000/greet/John

    let name=req.params.user;

    let qs=req.query.city;

    res.send("<h1>"+name +", Happy to know.."+qs+"</h1>");

});

app.post('/save', (req, res) => {
    let data=req.body;
    console.log(data);
    //res.send("<h1>You have called http POST</h1>");
    res.json(data);
});
app.put('/update', (req, res) => {
    res.send("<h1>You have called http PUT</h1>");
});


app.delete('/remove', (req, res) => {
    res.send("<h1>You have called http DELETE</h1>");
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
