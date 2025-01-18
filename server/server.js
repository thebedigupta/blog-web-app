const express = require('express');
const dotenv = require('dotenv').config();
const connectToDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use('/', userRoutes);
app.use('/blog', blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
