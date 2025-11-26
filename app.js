const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const menuRoutes = require('./routes/menu');
const cadastroClienteRoutes = require('./routes/cadastroCliente');
const authRoutes = require('./routes/auth')


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({ secret: 'my secret', resave: false, saveUninitialized: false })
);

app.use(menuRoutes);
app.use(cadastroClienteRoutes);
app.use(authRoutes);


app.listen(3000);

