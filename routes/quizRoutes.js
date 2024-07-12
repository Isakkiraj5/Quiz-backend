const express = require('express');
const router = express.Router();
const { createQuiz, getQuizzes, getQuiz, deleteQuiz } = require('../controllers/quizController');

router.post('/', createQuiz);
router.get('/', getQuizzes);
router.get('/:id', getQuiz);
router.delete('/:id', deleteQuiz);

module.exports = router;
