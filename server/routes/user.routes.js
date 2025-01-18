const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.post('/login', (req, res) => {
  res.send('Sucessful Login');
  //   res.redirect('/blog');
});

router.get('/signup', (req, res) => {
  res.send('Signup Page');
});
router.post('/signup', (req, res) => {
  res.send('Sucessful Signup');
  //   res.redirect('/blog');
});

module.exports = router;
