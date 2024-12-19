const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/courses', authMiddleware, async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const course = new Course({ title, description, price, owner: req.user.id });
    await course.save();
    res.status(201).send(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/courses', async (req, res) => {
  const { search } = req.query;
  const filter = search ? { title: new RegExp(search, 'i') } : {};
  const courses = await Course.find(filter).populate('owner', 'name');
  res.json(courses);
});

module.exports = router;
