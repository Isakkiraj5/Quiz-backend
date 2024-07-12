const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require("dotenv").config()
const url = 'mongodb+srv://isakkiraj:Esscooty%407300@cluster0.fdsuknk.mongodb.net/quiz';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const quizRoutes = require('./routes/quizRoutes');
app.use('/api/quizzes', quizRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
