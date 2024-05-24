require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/examBackend");

const brandRoutes = require('./routes/brand.routes');
const phoneRoutes = require('./routes/phone.routes');
app.use(brandRoutes);
app.use(phoneRoutes);

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome' });
});

app.all("*", (req, res) => {
  console.log("all routes");
  res.status(404).json({ message: "All routes" });
})
app.listen(3000, () => {
  console.log("server started");
})