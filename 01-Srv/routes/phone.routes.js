const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Phone = require('../models/Phone');
const Brand = require('../models/Brand');

router.post('/phone', async (req, res) => {
  console.log("je suis sur la route /phone");
  const {
    model,
    screensize,
    color,
  } = req.body
  try {
    if (req.body !== undefined) {
      const brandName = await Brand.findOne({ name: name })
      console.log("brand", brand)
      const newPhone = new Phone({
        model,
        screensize: screensize,
        color: color,
        brandRef: brand
      })
      await newPhone.save();
      res.status(200).json({ newPhone, message: "Phone crée" })
    } else {
      res.status(400).json({ message: "bad request" })
    }
  } catch (error) {
    console.log(error);
    console.log(error.status);
    return res.status(500).json({ message: error.message })
  }
})

router.get('/phone', async (req, res) => {
  console.log("je suis sur la route /phone");
  try {
    const phoneFind = await Phone.find().populate("brandRef")
    res.status(200).json({ phoneFind })
  } catch (error) {
    console.log(error);
    console.log(error.status);
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router;