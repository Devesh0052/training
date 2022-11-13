const express = require('express');
const handlebars = require('express-handlebars');

const PORT = 8081;
const app = express();
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'main'
}));

app.get('/', (req, res) => {
    let data = {
        id: 100,
        name: "John",
        city: "Bangalore"
    }
    res.render('index', {data});
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
