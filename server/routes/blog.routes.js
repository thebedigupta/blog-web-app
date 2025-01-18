const express = require('express');
const router = express.Router();

const dotenv = require('dotenv').config();

// Create Post Route

router.post('/create', (req, res) => {
  res.send('Blog Create Page');
});

// Read Post Route

router.get('/', (req, res) => {
  res.send('Blog Home Page');
});

// Update Post Route

router.put('/update', (req, res) => {
  res.send('Blog Update Page');
});

// Delete Post Route

router.delete('/delete', (req, res) => {
  res.send('Blog Delete Page');
});

module.exports = router;
