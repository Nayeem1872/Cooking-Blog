const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv')

const app=express();
dotenv.config();
const PORT= process.env.PORT || 2000;

require('dotenv').config();
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine','ejs')
app.set('layout', './layouts/main');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);
 

app.listen(PORT,()=>{
    console.log('server running');
})
     
