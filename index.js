const express = require('express');
const auth = require('./routes/authroute');
const user = require('./routes/userroute');
const bodyParser = require('body-parser');
const { verify } = require('./middlewears/middleauth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Login / Signup
app.use('/auth', auth);

// Protected route
app.use('/user', verify, user);

app.listen(3000, () => {
  console.log("Server running on 3000");
});