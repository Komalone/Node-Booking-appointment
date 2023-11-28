const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes = require('./routes/User');
//const errorController= require('./controller/error');
//const User= require('./model/user');
const cors= require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use( userRoutes);

//app.use(errorController.get404);
sequelize.sync()
app.listen(3005);
