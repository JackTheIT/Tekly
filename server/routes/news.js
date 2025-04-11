const express = require('express');
const News = require('../models/News');
const router = express.Router();

// Post News
router.post('/', async (req, res) => {
  const { title, content, language, author } = req.body;
  try {
    const newsPost = new News({ title, content, language, author });
    await newsPost.save();
    res.status(201).json(newsPost);
  } catch (err) {
    res.status(500).json({ message: 'Error posting news' });
  }
});

// Get News
router.get('/', async (req, res) => {
  try {
    const news = await News.find().populate('author', 'name');
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});

module.exports = router;
