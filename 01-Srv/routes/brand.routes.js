const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Brand = require('../models/Brand')

router.post('/brand', async (req, res) => {
  console.log("je suis sur la route /brand");
  const {
    name,
    headquarter,
    country
  } = req.body
  try {
    if (req.body !== undefined) {
      const newBrand = new Brand({
        name: name,
        headquarter: headquarter,
        country: country
      })
      await newBrand.save();
      res.status(200).json({ newBrand, message: "Marque crée" })
    } else {
      res.status(400).json({ message: "bad request" })
    }
  } catch (error) {
    console.log(error);
    console.log(error.status);
    return res.status(500).json({ message: error.message })
  }
})
module.exports = router;